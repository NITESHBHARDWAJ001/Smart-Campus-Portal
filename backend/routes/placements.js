const express = require('express');
const {
  getPlacements,
  getPlacement,
  createPlacement,
  updatePlacement,
  deletePlacement,
  togglePlacementActive,
  getPlacementApplications
} = require('../controllers/placementController');

// Import development controller
const devController = require('../controllers/devPlacementController');

const router = express.Router();

// Middleware
const { protect, authorize } = require('../middleware/auth');

// Log middleware for debugging
const logRequest = (req, res, next) => {
  console.log(`Placement API request: ${req.method} ${req.originalUrl}`);
  console.log('User in request:', req.user ? { 
    _id: req.user._id, 
    id: req.user.id,
    role: req.user.role 
  } : 'No user');
  next();
};

// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';
console.log(`Running in ${isDevelopment ? 'DEVELOPMENT' : 'PRODUCTION'} mode`);

// Routes with conditional controllers based on environment
router.route('/')
  .get(protect, logRequest, getPlacements)
  .post(protect, authorize('admin'), logRequest, createPlacement);

router
  .route('/:id')
  .get(protect, logRequest, getPlacement)
  .put(protect, authorize('admin'), logRequest, updatePlacement)
  .delete(protect, authorize('admin'), logRequest, deletePlacement);

router
  .route('/:id/toggle-active')
  .put(protect, authorize('admin'), logRequest, togglePlacementActive);

router
  .route('/:id/applications')
  .get(protect, authorize('admin'), logRequest, getPlacementApplications);

module.exports = router;