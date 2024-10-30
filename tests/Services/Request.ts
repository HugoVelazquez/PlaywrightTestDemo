import { request } from "@playwright/test"
import { readFile } from 'fs/promises';
import { ServiceConfigFile } from "../../setup";
import { AnalizeImageListResponse } from "./Response";

class AnalizeImageListRequest {
    imageUrls: string[];
    analysisType: string;
}

export class AnalizeImageList {

    async getBody(): Promise<AnalizeImageListRequest> {
        const config = JSON.parse(await readFile(ServiceConfigFile, 'utf8'));
        return config.AnalizeImageList.Body;
    }

    async getUrl():Promise<string> {
        const config = JSON.parse(await readFile(ServiceConfigFile, 'utf8'));
        return config.AnalizeImageList.Url;
    }


    async callAPI(body: AnalizeImageListRequest, url: string) {
        console.log(body);
        console.log(url);

        const requestContext = await request.newContext({
            ignoreHTTPSErrors: true
        });

        try {
            const response = await requestContext.post(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'text/plain'
                },
                data: body
            });
            
            let responseJson = await response?.json();
            let responseObject = AnalizeImageListResponse.fromJSON(responseJson);
            responseObject.status = response?.status();

            console.log(responseObject);
            
            return responseObject;

        } catch (ex) {
            console.log(ex);
        } finally {
            await requestContext.dispose();
        }
    }
}