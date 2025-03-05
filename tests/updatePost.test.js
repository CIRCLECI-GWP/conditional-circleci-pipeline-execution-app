const request = require('supertest')
var app = require('../app')
const db = require('./testDBsetup')
const PostModel = require('../models/Post')

describe('Post Update test suite', () => {
    beforeAll(async () => await db.connect())
    afterAll(async () => await db.close())

    // Update a valid post

    it('PATCH /posts/validID', async () => {
        const post = await PostModel.create({
            title: 'Post 1',
            description: 'Lorem ipsum',
        })

        const data = { title: 'New title', description: 'dolor sit amet' }

        const res = await request(app).patch(`/posts/${post._id}`).send(data)

        expect(res.statusCode).toBe(200)
    })

    // Try updating an invalid post

    it('PATCH /posts/invalidID', async () => {
        const res = await request(app).patch('/posts/348579').send({
            title: 'updated title',
            description: 'updated content',
        })

        expect(res.statusCode).toBe(500)
    })
})
