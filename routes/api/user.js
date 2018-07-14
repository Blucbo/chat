const router = require("express").Router();
const userService = require("../../services/user");

router.post("/", (req, res) => {
    userService.createUser(req.body)
        .then(data => res.send(data))
        .catch(err => {
            res.status(400);
            res.send(err);
        });

    console.log(req.body);
});

router.get("/", (req, res) => {
    userService.findAll().then(data => res.send(data));
});

router.get("/:id", (req, res) => {
    userService.findOne(req.params.id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400);
            res.send(err);
        });
});

router.delete('/:id', (req, res) => {
    userService.deleteUser(req.params.id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400);
            res.send(err);
        });
});

router.put('/:id', (req, res) => {
    userService.updateUser(req.params.id, req.body)
        .then(data => {
            res.status(200);
            res.send(req.body);
        })
        .catch(err => {
            res.status(400);
            res.send(err);
        });
});

// router.get("/receivers/:id", (req, res) => {
//     userService.getAllReceivers(req.params.id)
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.status(400);
//             res.send(err);
//         });
// });


module.exports = router;
