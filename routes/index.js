import express from "express";
import { 
    initPage,
    wePage,
    pageTravels,
    pageTravelDetail,
    pageTestimonials } from "../controllers/pagesControllers.js";
import { saveTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.get('/', initPage);

router.get('/we', wePage);

router.get('/travels', pageTravels);

router.get('/travels/:slug', pageTravelDetail);

router.get('/testimonials', pageTestimonials);

router.post('/testimonials', saveTestimonial);


router.get('/contact', (req, res) => { // req: we are sending, res: what express answer
    res.send('Contact')
});


export default router;
