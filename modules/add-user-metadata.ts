import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  request.headers.set("source", request.user.data.source);
  return request;
}
