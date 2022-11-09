import { Express, Router } from 'express'
import MemberAuthController from '../../presentation/controllers/member-auth'
import BuildMember from '../builders/member-build'
import { EmailAndPassword, RoutesRequest } from './interfaces/routes'

const Routes = ({ 
    app, 
    existToken 
} : RoutesRequest) : Express => {
    const router = app.use(Router())
    
    router.post('/member/register', async (req, res) => {
        const { email, password, nickname, name } = req.body as EmailAndPassword<{ nickname : string, name : string }>

        //res.status(response.statusCode).send(response)
    })
    
    router.post('/member/auth', async (req, res) => {
        const { email, password } = req.body as EmailAndPassword
        const response = await MemberAuthController({ BuildMember, email, password })
        res.status(response.statusCode).send(response.data)
    })

    router.get('/member/oauth/:provider', async (req, res) => {
        const provider = req.params.provider
        if (provider === 'google') {
            
        }
    })

    router.post('/member/forgot', async (req, res) => {
        const { email } = req.body as { email : string }
    })

    router.use(existToken)

    router.post('/member/delete', async (req, res) => {
        
    })

    router.patch('/member/uptade', async (req, res) => {
        
    })

    router.post('/member/message', async (req, res) => {
        
    })

    router.get('/member/read', async (req, res) => {
        
    })

    return router
}

export default Routes