const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth.middleware');

// Mock data for user progress
router.get('/dashboard', authMiddleware, (req, res) => {
    res.json({
        success: true,
        data: {
            stats: [
                { label: 'Courses in Progress', value: 2 },
                { label: 'Completed Courses', value: 3 },
                { label: 'Learning Hours', value: 24 },
                { label: 'Certificates', value: 1 }
            ],
            enrolledCourses: [
                {
                    id: '1',
                    title: 'Introduction to Web Development',
                    progress: 45,
                    lastAccessed: '2025-12-18'
                },
                {
                    id: '3',
                    title: 'वेब विकास का परिचय',
                    progress: 80,
                    lastAccessed: '2025-12-19'
                }
            ]
        }
    });
});

module.exports = router;
