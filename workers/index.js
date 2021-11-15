import { Router } from "itty-router";
import hash from "object-hash";
const router = Router();

//get all post
router.get("/post", async request => {
  const datas = [];
  const value = await MY_KV.list();
  for (var i = 0; i < value.keys.length; i++) {
    const tmp = await MY_KV.get(value.keys[i].name, { type: "json" });
    datas.push(tmp);
  }
  return new Response(JSON.stringify(datas), {
    headers: { "Access-Control-Allow-Origin": "*" }
  });
});

//post
router.post("/post", async request => {
  let resp = await request.json();
  await MY_KV.put(
    hash({
      ...resp,
      date: new Date()
    }),
    JSON.stringify(resp)
  );
  return new Response(JSON.stringify(resp), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "*",
      "Content-type": "application/json"
    }
  });
});

//404 handler
router.all("*", () => new Response("404, not found!"));

addEventListener("fetch", e => {
  e.respondWith(router.handle(e.request));
});
