const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  datasetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dataset',
    required: true,
  },
  executiveSummary: String,
  topRevenueRoutes: Array,
  mostDelayedRoutes: Array,
  highValueCustomers: Array,
  lowMarginTrips: Array,
  revenueTrends: String,
  operationalBottlenecks: String,
  costOptimizationSuggestions: Array,
  businessGrowthRecommendations: Array,
  riskAlerts: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Report', ReportSchema);
