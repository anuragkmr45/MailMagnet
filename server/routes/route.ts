import express from "express";
import {
    saveSendEmail,
    getEmails,
    toggleStarredEmail,
    deleteEmail,
    moveEmailToBin,

} from '../controller/email-controller.js'

const routes = express.Router();

routes.post('/save', saveSendEmail);
routes.post('/save-draft', saveSendEmail);
routes.post('/starred', toggleStarredEmail);
routes.post('/bin', moveEmailToBin);
routes.get('/emails/:type', getEmails);
routes.delete('/delete', deleteEmail);

export default routes;