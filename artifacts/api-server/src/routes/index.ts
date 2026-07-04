import { Router, type IRouter } from "express";
import healthRouter from "./health";
import bookingRouter from "./booking";
import contactRouter from "./contact";
import instagramRouter from "./instagram";
import borderQueueRouter from "./border-queue";

const router: IRouter = Router();

router.use(healthRouter);
router.use(bookingRouter);
router.use(contactRouter);
router.use(instagramRouter);
router.use(borderQueueRouter);

export default router;
