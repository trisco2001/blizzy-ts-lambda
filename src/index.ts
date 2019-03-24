import { Environment } from "./Environment";
import { AuthTokenService } from "./AuthTokenService";
import { Handler, Context, Callback } from 'aws-lambda';

export const handler = async (event: any = {}, context: Context, callback: Callback) => {
    const environment = new Environment()
    const authTokenService = new AuthTokenService(environment)

    console.log("Generating Token")
    const response = await authTokenService.generateToken()
    const token = response.data['access_token']
    const status = response.status
    callback(null, { status: status, data: {authToken: token}})
}