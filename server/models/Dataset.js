const mongoose = require('mongoose');

const DatasetSchema = new mongoose.Schema({
  userId: {
    type: String, // Mock user ID for now
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  summary: {
    totalTrips: Number,
    totalRevenue: Number,
    totalProfit: Number,
    delayedDeliveries: Number,
    activeCustomers: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Dataset', DatasetSchema);
