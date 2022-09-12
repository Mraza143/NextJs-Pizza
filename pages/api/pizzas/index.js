import dbConnect from "../../../config/db";
import Pizza from "../../../models/Pizza";

export default async function handler(req, res) {
  const { method , cookies} = req;

  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const pizzas = await Pizza.find();
      res.status(200).json(pizzas);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    console.log(process.env.TOKEN);
    console.log(token)
    if(!token || token !== process.env.TOKEN){
      return res.status(401).json("Not authenticated!")
    }

    try {
      const pizza = await Pizza.create(req.body);
      res.status(201).json((pizza));
    } catch (err) {
      res.status(500).json(err);
    }
  }
}