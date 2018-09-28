let default_state = {

    app: {
        route: 'null'
    },

    data: {
        time: '',
        firebase: {},
        wordpress: {},
        refs: false,
        sort: 'likes',
        view: 'grid',
        content: false,
        user: {},
        score: {
            current: {
                met: 0,
                area: 0,
            },
            leaderboard: [],
        }
    },

    animation: {
        duration: 0,
        frame: 1,
        framerate: 24,
        rate: 1000
    },

    events: {
        mouse: {
            click: {
                clientX: 0,
                clientY: 0
            },
            clientX: 0,
            clientY: 0,
            up: true,
            down: false,
            drop: {
                clientX: 0,
                clientY: 0
            },
            drag: {
                clientX: 0,
                clientY: 0
            },
            enter: true,
            leave: false,
            entertimer: 0,
            leavetimer: 0,
            timer: 0,
            automation: {
                increase: true,
                decrease: false,
            },
            absolute: 0,
            alpha: 0,
            beta: 0,
            gamma: 0,
            acceleration: {
                x: 0,
                y: 0,
                z: 0
            },
            accelerationIncludingGravity: {
                x: 0,
                y: 0,
                z: 0
            },
            rotationRate: {
                alpha: 0,
                beta: 0,
                gamma: 0
            },
            interval: {
                x: 0,
                y: 0,
                z: 0
            }
        },
        key: {
            keys: [],
            pressed: {
                key_tildy: false,
                key_1: false,
                key_2: false,
                key_3: false,
                key_4: false,
                key_5: false,
                key_6: false,
                key_7: false,
                key_8: false,
                key_9: false,
                key_0: false,
            },
            last_key: 0,
            up: true,
            down: false,
            timer: 0,
            automation: {
                increase: true,
                decrease: false,
            },
        },
    },

    ux: {
        browser: {
            height: window.outerHeight,
            width: window.outerWidth
        },
        window: {
            height: window.innerHeight,
            width: window.innerWidth
        },
        screen: {
            height: window.screen.height,
            width: window.screen.width,
            orientation: window.screen.orientation
        },
        dimensions: {
            current: 8,
            height: window.innerHeight,
            width: window.innerWidth,
            height8: window.innerHeight / 8,
            width8: window.innerWidth / 8,
            height16: window.innerHeight / 16,
            width16: window.innerWidth / 16,
            height32: window.innerHeight / 32,
            width32: window.innerWidth / 32,
            height64: window.innerHeight / 64,
            width64: window.innerWidth / 64,
            height128: window.innerHeight / 128,
            width128: window.innerWidth / 128,
            height256: window.innerHeight / 256,
            width256: window.innerWidth / 256,
        }
    },

    ui: {

        colors: {
            load_light_yellow_0: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 4,
                height: 4,
                width: 4,
            }
        },

        stage: {

            workspace: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 0,
                height: 3,
                width: 4,

                imac: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },

                monitor: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },

                mic: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },

                scarlett: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },

                speaker_1: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },

                speaker_2: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },

                speaker_3: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },

                books_1: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },

                books_2: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },

                desk: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },

                chair_1: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },

                chair_2: {
                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 0,
                    height: 3,
                    width: 4,
                },
            },

            office: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },

            shoplight: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 0,
                height: 2,
                width: 2,
            },

            sky: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },
            outside: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },
            enneagon: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -1,
                height: 4,
                width: 4,
            },

        },

        particles: {
                player_1: {

                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 1,
                    yaxis: 0,
                    height: 4,
                    width: 2,
                    body: {

                        transform: false,
                        opacity:false,
                        display: false,
                        xaxis: 2,
                        yaxis: 4,
                        height: 4,
                        width: 4,
                    }
                },
        },
        interaction: {

            player_1: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: 1,
                yaxis: 0,
                height: 4,
                width: 2,
                body: {

                    transform: false,
                    opacity:false,
                    display: false,
                    xaxis: 2,
                    yaxis: 4,
                    height: 4,
                    width: 4,
                }
            },

            enemy: {
                speed: 1,
                transform: false,
                opacity:false,
                display: false,
                xaxis: 0,
                xaxisascending: true,
                yaxis: 0,
                height: 4,
                width: 2,
                yaxisascending: true,
                actions: {
                    jump: false
                }
            },

            helper: {

                transform: false,
                opacity:false,
                display: false,
                xaxis: -1,
                yaxis: -4,
                height: 8,
                width: 4,
            },

            easel: {
                display: false,
                transform: false,
                opacity:false,
                pen: [],
                pencil: []
            },

            dice: (Math.floor(Math.random() * 6) + 1),

            random: (Math.floor(Math.random() * 100) + 1),

            bullets: [
                {
                    xaxis: 0,
                    yaxis: 0
                },
                {
                    xaxis: 0,
                    yaxis: 0
                },
                {
                    xaxis: 0,
                    yaxis: 0
                },
                {
                    xaxis: 0,
                    yaxis: 0
                }
            ],

            hands: {
                transform: false,
                opacity:false,
                display: false,
                speed: 1,
                xaxis: 3,
                xaxisascending: true,
                yaxis: 1,
                yaxisascending: true,
            },

            track_x: {
                transform: false,
                opacity:false,
                display: false,
                speed: 1,
                xaxis: 3,
                xaxisascending: true,
                yaxis: 1,
                yaxisascending: true,
            },

            track_y: {
                transform: false,
                opacity:false,
                display: false,
                speed: 1,
                xaxis: 3,
                xaxisascending: true,
                yaxis: 1,
                yaxisascending: true,
            },

            ball: {
                transform: false,
                opacity:false,
                display: false,
                speed: 1,
                xaxis: 3,
                xaxisascending: true,
                yaxis: 1,
                yaxisascending: true,
            },

            bounce: {
                transform: false,
                opacity:false,
                display: false,
                speed: 1,
                xaxis: 3,
                xaxisascending: true,
                yaxis: 1,
                yaxisascending: true,
            },

            snake: [{
                xaxis: 0,
                yaxis: 0
            }],
        },

        gui: {

            top: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            top_left: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            top_right: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            bottom: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            bottom_left: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            bottom_right: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            left: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            right: {
                transform: false,
                opacity:false,
                display: false,
                xaxis: 2,
                yaxis: 2,
                height: 4,
                width: 4
            },
            scroll: {
                x: {
                    transform: false,
                    opacity:false,
                    display: false
                },
                y: {
                    transform: false,
                    opacity:false,
                    display: false
                },
            },
        },

        modal: {
            pop: {
                top: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                bottom: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                left: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                right: {

                    transform: true,
                    opacity:false,
                    display: false
                }
            },
            page: {
                top: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                bottom: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                left: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                right: {

                    transform: true,
                    opacity:false,
                    display: false
                }
            },
            fade: {
                top: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                bottom: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                left: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                right: {

                    transform: true,
                    opacity:false,
                    display: false
                }
            },
            gradient: {
                top: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                bottom: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                left: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                right: {

                    transform: true,
                    opacity:false,
                    display: false
                }
            },
            morph: {
                top: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                bottom: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                left: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                right: {

                    transform: true,
                    opacity:false,
                    display: false
                }
            },
            menu: {
                top: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                bottom: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                left: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                right: {

                    transform: true,
                    opacity:false,
                    display: false
                }
            },
            overlay: {
                top: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                bottom: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                left: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                right: {

                    transform: true,
                    opacity:false,
                    display: false
                }
            },
            nav: {
                top: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                bottom: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                left: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                right: {

                    transform: true,
                    opacity:false,
                    display: false
                }
            },
            corner: {
                top: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                bottom: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                left: {

                    transform: true,
                    opacity:false,
                    display: false
                },
                right: {

                    transform: true,
                    opacity:false,
                    display: false
                }
            },

        }

    }

};

let from_Import = () => {
    console.log('from state');
};

from_Import();

export default {
    from_Import,
    default_state
}
