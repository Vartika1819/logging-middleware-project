const axios = require("axios");
const Log = require("../logging_middleware/logger");

const API = "http://20.207.122.201/evaluation-service/notifications";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2czA3MTVAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDMwNSwiaWF0IjoxNzc3Njk5NDA1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYzczMWFiZDctM2VlMC00NjllLWIxYjEtMjJlNWIxYzhmOWRiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmFydGlrYSBzaW5naCIsInN1YiI6IjU1ZjY0MmFkLTAwYmQtNDQ2My05MzU4LTAxNDhiNmE3ZTc1MCJ9LCJlbWFpbCI6InZzMDcxNUBzcm1pc3QuZWR1LmluIiwibmFtZSI6InZhcnRpa2Egc2luZ2giLCJyb2xsTm8iOiJyYTIzMTEwMjYwMTAzNzEiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiI1NWY2NDJhZC0wMGJkLTQ0NjMtOTM1OC0wMTQ4YjZhN2U3NTAiLCJjbGllbnRTZWNyZXQiOiJ3WWNCS0JzWGJ0c3ZLc2Z1In0.0sLNO67x2nVV1n9zAF1EfSV3BnF_WnWv8Ifel2QwlPo";

function getWeight(type) {
  if (type === "Placement") return 3;
  if (type === "Result") return 2;
  return 1;
}

async function fetchNotifications() {
    return [
        { Type: "info", Timestamp: "2026-05-01T10:00:00Z", message: "Test 1" },
        { Type: "error", Timestamp: "2026-05-02T10:00:00Z", message: "Test 2" },
        { Type: "warning", Timestamp: "2026-05-03T10:00:00Z", message: "Test 3" }
    ];
}

function getTopNotifications(data) {
  return (Array.isArray(data) ? data : [])
    .map(n => ({
      ...n,
      weight: getWeight(n.Type),
      time: new Date(n.Timestamp)
    }))
    .sort((a, b) => {
      if (b.weight !== a.weight) return b.weight - a.weight;
      return b.time - a.time;
    })
    .slice(0, 10);
}

async function main() {
  const notifications = await fetchNotifications();

  console.log("Fetched:", notifications); // 👈 keep this for now

  const top = getTopNotifications(notifications);

  console.log("Top notifications:", top);
}

main();
