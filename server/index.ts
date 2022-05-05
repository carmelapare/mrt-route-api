import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3002;

const app = express();

const stationRouter = require("./routes/stationRouter")();

app.use(cors());
app.use(function(req: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Expose-Headers", "Content-Length");
    res.header(
        "Access-Control-Allow-Headers",
        "Accept, Authorization, Content-Type, X-Requested-With, Range"
    );

    if (req.method === "OPTIONS")
        return res.sendStatus(200);
    else 
        return next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/stations", stationRouter);

app.get("/api", (req: any, res: any) => {
    res.send("Sample API for my Train Route System");
});

app.listen(PORT, () => {
    console.log("Running on port " + PORT);
});
