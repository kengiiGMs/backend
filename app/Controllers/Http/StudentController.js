'use strict'

const Student = use('App/Models/Student');

class StudentController {
    async index({ response }) {
        try {
            const data = await Student.all();
            return response.json(data);
        } catch (err) {
            console.error(err.message);
            return response.status(500).json({ error: 'Erro ao listar estudantes' });
        }
    }

    async store({ request, response }) {
        try {
            const data = request.only(['name', 'address', 'phone', 'course']);

            const student = await Student.create(data);

            return response.json(student);
        } catch (err) {
            console.error(err.message);
            return response.status(500).json({ error: 'Erro ao cadastrar o estudante' });
        }
    }

    async update({ params, request, response }) {
        try {
            const data = request.only(['name', 'address', 'phone', 'course']);
            const studentId = params.student_id;

            const exists = await Student.find(studentId);
            if (!exists) {
                return response.status(404).json({ error: 'Erro estudante não encontrado' });
            }

            await Student.query().where('id', studentId).update(data);

            return response.json({ message: 'Estudante atualizado com sucesso!' });

        } catch (err) {
            console.error(err.message);
            return response.status(500).json({ error: 'Erro ao atualizar o estudante' });
        }
    }

    async delete({ params, response }) {
        try {
            const studentId = params.student_id;

            const exists = await Student.find(studentId);
            if (!exists) {
                return response.status(404).json({ error: 'Erro estudante não encontrado' });
            }

            await Student.query().where('id', studentId).delete();

            return response.json({ message: 'Estudante deletado com sucesso!' });

        } catch (err) {
            console.error(err.message);
            return response.status(500).json({ error: 'Erro ao deletar o estudante' });
        }
    }
}

module.exports = StudentController
