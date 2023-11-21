import SOAP from "strong-soap";
const { soap } = SOAP;
class MySoapClient {
    constructor() {
        this.url = "http://localhost:8080/calculator?wsdl";
        this.options = {};
        this._client = async () => {
            return new Promise((resolve, reject) => {
                soap.createClient(this.url, this.options, (err, client) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(client);
                });
            });
        };
    }

    add(args) {
        return new Promise(async (resolve, reject) => {
            const client = await this._client();
            client.add(args, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    subtract(args) {
        return new Promise(async (resolve, reject) => {
            const client = await this._client();
            client.subtract(args, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
}

export default MySoapClient;