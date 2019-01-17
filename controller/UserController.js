const constants = require('../constants/constants')

module.exports.createUser = (req, res, next) => {
    try {
        let responeObj = {}
        let data = req.body
        //call the service
        console.log("req.body *****",data)
        //hardcode respone from service
        let responeFromService = {
            status : constants.serviceStatus.USER_CREATED_SUCCESSFULLY,
            body:req.body
        }
        switch (responeFromService.status) {
            case constants.serviceStatus.USER_CREATED_SUCCESSFULLY:
                responeObj.status = 200
                responeObj.message = constants.serviceStatus.USER_CREATED_SUCCESSFULLY
                responeObj.body = responeFromService.body
                break;
        
            default:
                responeObj = constants.responeObj
                break;
        }
       return res.status(responeObj.status).send(responeObj)

    } catch (error) {
        console.log('Something went wrong : controller : create User Eroor');
        responeObj = constants.responeObj
        return res.status(responeObj.status).send(responeObj)
    }

}