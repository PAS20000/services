import Server from "./server/server";
import Routes from './server/routes';
import express from 'express';

const app = express()

const WebServer = Server(
    Routes({
        app,
        existToken : () => {}
    })
)

WebServer.Start()