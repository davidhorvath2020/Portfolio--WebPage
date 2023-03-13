import { createServer, Model } from "miragejs"


createServer({
    models: {
        jobs: Model,
    },

    seeds(server) {
        server.create("job", { id: "1", name: "Todo list", details: 'részletek ide jöhetnek de csak röviden'})
        server.create("job", { id: "2", name: "Project2", details: 'részletek ide jöhetnek de csak röviden'})
        server.create("job", { id: "3", name: "Project3", details: 'részletek ide jöhetnek de csak röviden'})
        server.create("job", { id: "4", name: "Project4", details: 'részletek ide jöhetnek de csak röviden'})
        server.create("job", { id: "5", name: "Project6", details: 'részletek ide jöhetnek de csak röviden'})
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/jobs", (schema, request) => {
            return schema.jobs.all()
        })

        this.get("/jobs/:id", (schema, request) => {
            const id = request.params.id
            return schema.jobs.find(id)
        })
    }
})