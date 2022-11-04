import http from 'http'
import { Express } from 'express'
import cookieParser from "cookie-parser";
import cors from 'cors';
import express from 'express';

const Server = (app : Express) => {
  app.use(cors())
  app.use(express.json())
  app.use(cookieParser())

  const Server = http.createServer(app)
  const Port = '8080'

  return {
    Start() {
      Server.listen(Port, () => {
        console.log(`[ The server listen ] => on port http://localhost:${Port}`)
      })
    },
    Stop() {
      Server.close(() => {
        console.log(`[ The server was stoped ] => X`)
      })
    }
  }
}

export default Server