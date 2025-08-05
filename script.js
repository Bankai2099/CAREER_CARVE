// CareerCarve Mobile App JavaScript

class CareerCarveApp {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.animateOnLoad();
        this.createComingSoonPages();
    }

    setupEventListeners() {
        // Feature card clicks
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const page = e.currentTarget.dataset.page;
                this.showComingSoonPage(page);
            });
        });

        // Primary action CTA
        const primaryAction = document.querySelector('.primary-action');
        if (primaryAction) {
            primaryAction.addEventListener('click', () => {
                this.showComingSoonPage('resume');
            });
        }

        // Quick action icons
        document.querySelectorAll('.quick-icons i').forEach((icon, index) => {
            icon.addEventListener('click', () => {
                const pages = ['search', 'resume', 'interview', 'learning', 'network'];
                this.showComingSoonPage(pages[index]);
            });
        });

        // Bottom navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                // Remove active class from all nav items
                document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                // Add active class to clicked item
                e.currentTarget.classList.add('active');
            });
        });

        // Add hover effects for interactive elements
        this.addHoverEffects();
    }

    addHoverEffects() {
        // Add pulse effect to action buttons
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add card tilt effect on mobile
        document.querySelectorAll('.feature-card, .focus-card, .mentor-card, .community-card').forEach(card => {
            card.addEventListener('touchstart', () => {
                card.style.transform = 'scale(0.98)';
            });
            
            card.addEventListener('touchend', () => {
                card.style.transform = 'scale(1)';
            });
        });
    }

    animateOnLoad() {
        // Stagger animation for cards
        const cards = document.querySelectorAll('.feature-card, .focus-card, .mentor-card, .community-card, .recommendation-card, .alert-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });

        // Animate progress bar
        setTimeout(() => {
            const progressFill = document.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.width = '0%';
                setTimeout(() => {
                    progressFill.style.width = '85%';
                }, 500);
            }
        }, 1000);
    }

    createComingSoonPages() {
        const pages = {
            resume: {
                title: '🚧 Resume Builder',
                subtitle: '🎨 AI-Powered Resume Creation',
                sections: [
                    {
                        title: '🤖 Smart Resume Analysis',
                        features: [
                            'AI scans your LinkedIn/portfolio',
                            'Identifies key achievements & skills',
                            'Suggests industry-specific keywords',
                            'Optimizes for ATS systems'
                        ]
                    },
                    {
                        title: '📊 Resume Templates',
                        features: [
                            'Modern, Clean, Professional',
                            'Industry-specific designs',
                            'ATS-friendly formatting',
                            'Customizable sections'
                        ]
                    },
                    {
                        title: '🎯 Smart Features',
                        features: [
                            'Real-time ATS scoring',
                            'Keyword optimization',
                            'Industry benchmarking',
                            'Export to PDF/Word'
                        ]
                    }
                ]
            },
            interview: {
                title: '🚧 Interview Preparation',
                subtitle: '🎯 AI-Powered Interview Training',
                sections: [
                    {
                        title: '🤖 Mock Interview Sessions',
                        features: [
                            'Real-time AI interviewer',
                            'Industry-specific questions',
                            'Behavioral & technical scenarios',
                            'Performance analytics & feedback'
                        ]
                    },
                    {
                        title: '📚 Question Bank',
                        features: [
                            '500+ curated questions',
                            'Company-specific preparation',
                            'Role-based scenarios',
                            'Answer templates & tips'
                        ]
                    },
                    {
                        title: '🎬 Video Practice',
                        features: [
                            'Record your responses',
                            'AI analysis of body language',
                            'Speech pattern optimization',
                            'Confidence building exercises'
                        ]
                    }
                ]
            },
            jobs: {
                title: '🚧 Job Matcher',
                subtitle: '🎯 AI-Powered Job Recommendations',
                sections: [
                    {
                        title: '🤖 Smart Job Matching',
                        features: [
                            'AI analyzes your skills & preferences',
                            'Real-time job market scanning',
                            'Personalized role recommendations',
                            'Salary & benefits comparison'
                        ]
                    },
                    {
                        title: '📊 Career Path Insights',
                        features: [
                            'Industry growth projections',
                            'Skill demand analysis',
                            'Career progression mapping',
                            'Company culture insights'
                        ]
                    },
                    {
                        title: '🎯 Application Tracking',
                        features: [
                            'One-click applications',
                            'Interview scheduling',
                            'Follow-up reminders',
                            'Success rate analytics'
                        ]
                    }
                ]
            },
            skills: {
                title: '🚧 Skills Assessment',
                subtitle: '🎯 Comprehensive Skill Evaluation',
                sections: [
                    {
                        title: '📊 Technical Skills',
                        features: [
                            'Programming languages',
                            'Tools & technologies',
                            'Industry-specific skills',
                            'Certification tracking'
                        ]
                    },
                    {
                        title: '🧠 Soft Skills',
                        features: [
                            'Leadership & communication',
                            'Problem-solving & creativity',
                            'Team collaboration',
                            'Emotional intelligence'
                        ]
                    },
                    {
                        title: '📈 Progress Tracking',
                        features: [
                            'Skill gap analysis',
                            'Learning recommendations',
                            'Industry benchmarking',
                            'Certification opportunities'
                        ]
                    }
                ]
            },
            learning: {
                title: '🚧 Learning Path',
                subtitle: '🎯 Personalized Learning Journey',
                sections: [
                    {
                        title: '🎓 Structured Courses',
                        features: [
                            'Industry-specific modules',
                            'Interactive video content',
                            'Hands-on projects',
                            'Expert-led sessions'
                        ]
                    },
                    {
                        title: '🎯 Skill Tracks',
                        features: [
                            'Product Management Fundamentals',
                            'Data Analytics & Insights',
                            'User Research & Design',
                            'Leadership & Strategy'
                        ]
                    },
                    {
                        title: '🏆 Achievement System',
                        features: [
                            'Badges & certificates',
                            'Progress milestones',
                            'Peer recognition',
                            'Industry validation'
                        ]
                    }
                ]
            },
            network: {
                title: '🚧 Network Connect',
                subtitle: '🎯 Professional Networking Platform',
                sections: [
                    {
                        title: '👥 Community Forums',
                        features: [
                            'Industry-specific discussions',
                            'Q&A with experts',
                            'Peer learning groups',
                            'Event networking'
                        ]
                    },
                    {
                        title: '👨‍💼 Mentorship Program',
                        features: [
                            '1-on-1 mentor sessions',
                            'Group mentoring circles',
                            'Career guidance & advice',
                            'Industry insights sharing'
                        ]
                    },
                    {
                        title: '🎤 Events & Workshops',
                        features: [
                            'Virtual career fairs',
                            'Industry webinars',
                            'Skill-building workshops',
                            'Networking events'
                        ]
                    }
                ]
            }
        };

        Object.keys(pages).forEach(pageKey => {
            this.createComingSoonPage(pageKey, pages[pageKey]);
        });
    }

    createComingSoonPage(pageKey, pageData) {
        const pageHtml = `
            <div class="coming-soon-page" id="${pageKey}-page">
                <div class="back-button" onclick="app.showHomePage()">
                    <i class="fas fa-arrow-left"></i>
                    Back to Home
                </div>
                
                <div class="page-title">
                    ${pageData.title}
                </div>
                
                <div class="page-subtitle">
                    ${pageData.subtitle}
                </div>
                
                ${pageData.sections.map(section => `
                    <div class="feature-section">
                        <h3>${section.title}</h3>
                        <ul class="feature-list">
                            ${section.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
                
                <div class="notify-section">
                    <h3>📧 Get Notified When Available</h3>
                    <button class="notify-btn" onclick="app.handleNotifyMe('${pageKey}')">
                        Notify Me
                    </button>
                </div>
            </div>
        `;

        document.querySelector('.mobile-container').insertAdjacentHTML('beforeend', pageHtml);
    }

    showComingSoonPage(pageKey) {
        // Hide home content
        const homeContent = document.querySelector('.mobile-container > *:not(.coming-soon-page)');
        
        // Hide all coming soon pages
        document.querySelectorAll('.coming-soon-page').forEach(page => {
            page.classList.remove('active');
        });

        // Show specific page
        const targetPage = document.getElementById(`${pageKey}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.classList.add('fade-in');
            this.currentPage = pageKey;
        }
    }

    showHomePage() {
        // Hide all coming soon pages
        document.querySelectorAll('.coming-soon-page').forEach(page => {
            page.classList.remove('active');
        });
        
        this.currentPage = 'home';
    }

    handleNotifyMe(feature) {
        // Simple notification simulation
        const button = event.target;
        const originalText = button.textContent;
        
        button.textContent = 'Notification Set! ✅';
        button.style.background = '#48bb78';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'white';
        }, 2000);

        // In a real app, this would send the email to a backend service
        console.log(`User requested notification for: ${feature}`);
    }

    // Utility methods for enhanced interactivity
    updateProgressBar(percentage) {
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = percentage + '%';
        }
    }

    addNotification(message) {
        // Create toast notification
        const notification = document.createElement('div');
        notification.className = 'toast-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
            background: #48bb78;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            z-index: 2000;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideDown 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CareerCarveApp();
});

// Add some global styles for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    .toast-notification {
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
`;
document.head.appendChild(styleSheet);