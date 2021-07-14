import { Router } from "express";
import { crearTipo, listarTipo } from "../controllers/tipo";
import { tipoRequestDto } from '../controllers/dto.request'

export const tipoRouter: Router = Router();
tipoRouter.route("/tipos").post(tipoRequestDto,crearTipo).get(listarTipo);
