import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.yo yo yo');
    context.res = {
        body: { message: "Hallo From A Function" }
    };
};

export default httpTrigger;