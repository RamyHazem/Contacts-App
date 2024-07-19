import { Router } from "express";
import newContactType from "../types/newContact";

const router = Router();

let contacts: newContactType[] = [];

router.get("/", (req, res) => {
  res.render("contactsPage", {
    contacts: contacts,
  });
});

router.post("/", (req, res) => {
  const newContact: newContactType = {
    firstName: "ramy",
    lastName: "awad",
    phoneNumber: "01006661686",
    email: "ramy@gmail.com",
  };
  contacts.push(newContact);
  res.send(newContact);
});

export default router;
