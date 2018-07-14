const router = require("express").Router();
const messageService = require("../../services/message");

router.post("/", (req, res) => {
    messageService.createMessage(req.body)
        .then(data => res.send(data))
        .catch(err => {
            res.status(400);
            res.send(err);
        });
});

router.get("/", (req, res) => {
    messageService.findAll().then(data => res.send(data));
});

router.get("/:id", (req, res) => {
    messageService.findOne(req.params.id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400);
            res.send(err);
        });
});

router.delete('/:id', (req, res) => {
    messageService.deleteMessage(req.params.id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400);
            res.send(err);
        });
});

router.put('/:id', (req, res) => {
    messageService.updateMessage(req.params.id, req.body)
        .then(data => {
            res.status(200);
            res.send(req.body);
        })
        .catch(err => {
            res.status(400);
            res.send(err);
        });
});

router.get("/receivers/:id", (req, res) => {
   messageService.getAllReceivers(req.params.id)
        .then(data => {
            res.json(data.map(({friend: [friend]}) => friend));
        })
        .catch(err => {
            res.status(400);
            res.send(err);
        });
});


module.exports = router;