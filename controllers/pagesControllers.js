import { travels } from '../models/Travels.js';
import { Testimonial } from '../models/Testimonials.js';

const  initPage = async  (req, res) => { // req: we are sending, res: what express answer
    //consult 3 travels from viajes model
    //const sometravels = await travels.findAll({ limit:3 }); //as viajes and testimoniales no dependes of the other i can do a promise for viajes and testimoniales
    //const testimoniales = await travels.findAll({ limit:3 }); // in this wait is not good becasue it execute until someTravel end, then its better to use promise all

    promiseDB = [];

    promiseDB.push(travels.findAll({ limit:3 }));
    promiseDB.push(testimoniales.findAll({ limit:3 }));

    try {
        const result =  await Promise.all(promiseDB)
        res.render('start', {
            pagina: 'Inicio',
            clase: 'home',
            sometravels: result[0],
            testimonials: result[1]
        })
    } catch (error) {
        console.log(error)
    }
};

const wePage = (req, res) => {
    //const trip = 'traveling to Germany' // req: we are sending, res: what express answer
    res.render('we', {
        pagina: 'We'
    })
}

const pageTravels = async (req, res) => {
    const trip = 'traveling to Germany' // req: we are sending, res: what express answer

    //request DB
    const allTravels = await travels.findAll();

    //console.log(allTravels) check in terminal

    
    res.render('travels', {
        pagina: 'Next travels',
        allTravels
    })
}

const pageTravelDetail = async (req, res) => {
    const { slug } = req.params;

    try {
        const result = await travels.findOne({ where: { slug }});

        res.render('traveldetail', {
            pagina: 'Info travel',
            result
        })
    } catch (error) {
        console.log(error)
    }
}

const pageTestimonials = async (req, res) => {
    const trip = 'traveling to Germany' // req: we are sending, res: what express answer
    
    try {
        const testimonials = await Testimonial.findAll();

        res.render('testimonials', {
            pagina: 'Testimonials',
            testimonials
            //trip
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    initPage,
    wePage,
    pageTravels,
    pageTravelDetail,
    pageTestimonials
}