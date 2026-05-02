const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2czA3MTVAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDMwNSwiaWF0IjoxNzc3Njk5NDA1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYzczMWFiZDctM2VlMC00NjllLWIxYjEtMjJlNWIxYzhmOWRiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmFydGlrYSBzaW5naCIsInN1YiI6IjU1ZjY0MmFkLTAwYmQtNDQ2My05MzU4LTAxNDhiNmE3ZTc1MCJ9LCJlbWFpbCI6InZzMDcxNUBzcm1pc3QuZWR1LmluIiwibmFtZSI6InZhcnRpa2Egc2luZ2giLCJyb2xsTm8iOiJyYTIzMTEwMjYwMTAzNzEiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiI1NWY2NDJhZC0wMGJkLTQ0NjMtOTM1OC0wMTQ4YjZhN2U3NTAiLCJjbGllbnRTZWNyZXQiOiJ3WWNCS0JzWGJ0c3ZLc2Z1In0.0sLNO67x2nVV1n9zAF1EfSV3BnF_WnWv8Ifel2QwlPo";

async function Log(stack, level, pkg, message) {
  try {
    await axios.post(
      LOG_API,
      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );
  } catch (err) {}
}

module.exports = Log;
