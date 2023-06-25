const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Oppurtunity = require('./../models/oppurtunityModel');

exports.getAllOppurtunity = catchAsync(async (req, res, next) => {
    const oppurtunities = await Oppurtunity.find();

    res.status(200).json({
        message: 'success',
        data: {
            oppurtunities,
        },
    });
});

exports.getOppurtunity = catchAsync(async (req, res, next) => {});

exports.createOppurtunity = catchAsync(async (req, res, next) => {
    const data = req.body;
    console.log(data);

    const newData = await Oppurtunity.create({
        name: data.name || data.title,
        org: data.org,
        deadline: data.deadline,
        description: data.description,
        tags: data.tags,
        stipend: data.stipend || data.paid,
        link: data.link,
        location: data.location || data.country,
        type: data.type,
    });

    res.status(201).json({
        message: 'success',
        data: {
            newData,
        },
    });
});
exports.createMultipleOppurtunity = catchAsync(async (req, res, next) => {
    const data = req.body;
    console.log(data);

    const newData = await Oppurtunity.create(data);

    res.status(201).json({
        message: 'success',
        data: {
            newData,
        },
    });
});
exports.updateOppurtunity = catchAsync(async (req, res, next) => {});
exports.deleteOppurtunity = catchAsync(async (req, res, next) => {});

exports.checkDeadline = catchAsync(async (req, res, next) => {
    
});