import dbConnect from "../../../config/db";
import Pizza from "../../../models/Pizza";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  //const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const pizza = await Pizza.findById(id);
      res.status(200).json(pizza);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const pizza = await Pizza.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(pizza);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    try {
      await Pizza.findByIdAndDelete(id);
      res.status(200).json("The pizza has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}