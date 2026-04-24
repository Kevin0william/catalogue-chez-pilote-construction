document.addEventListener('DOMContentLoaded', () => {
    const products = [
        ///////////////////////////////////////////////////
        {
            category: 'carreaux-20x20',
            name: 'FGP 22003C',
            description: 'Carreau 20x20 FGP 22003C',
            image: 'FGP_22003.jpeg',
        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22005C',
            description: 'Carreau 20x20 FGP 22005C',
            image: 'FGP_22005.jpeg'
        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22006C',
            description: 'Carreau 20x20 FGP 22006C',
            image: 'FGP_22006.jpeg'

        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22007C',
            description: 'Carreau 20x20 FGP 22007C',
            image: 'FGP_22007.jpeg'
        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22008',
            description: 'Carreau 20x20 FGP 22008',
            image: 'FGP_22008.jpeg'

        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22009',
            description: 'Carreau 20x20 FGP 22009',
            image: 'FGP_22009.jpeg'
        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22011C',
            description: 'Carreau 20x20 FGP 22011C',
            image: 'FGP_22011.jpeg'
        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22012',
            description: 'Carreau 20x20 FGP 22012',
            image: 'FGP_22012.jpeg'
        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22013C',
            description: 'Carreau 20x20 FGP 22013C',
            image: 'FGP_22013.jpeg'
        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22014',
            description: 'Carreau 20x20 FGP 22014',
            image: 'FGP_22014.jpeg'
        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22015C',
            description: 'Carreau 20x20 FGP 22015C',
            image: 'FGP_22015.jpeg'
        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22016C',
            description: 'Carreau 20x20 FGP 22016C',
            image: 'FGP_22016.jpeg'
        },
        {
            category: 'carreaux-20x20',
            name: 'FGP 22017',
            description: 'Carreau 20x20 FGP 22017',
            image: 'FGP_22017.jpeg'
        },
        {
            category: 'carreaux-20x20',
            name: 'YM 22024',
            description: 'Carreau 20x20 YM 22024',
            image: 'YM_22024.jpeg'
        },

        ////////////////////////////////////
        {
            category: 'carreaux-20x30',
            name: 'PMCP 23001C',
            description: 'Carreau 20x30 PMCP 23001C',
            image: 'PMCP_23001.jpeg'
        },
        {
            category: 'carreaux-20x30',
            name: 'PMCP 23004C',
            description: 'Carreau 20x30 PMCP 23004C',
            image: 'PMCP_23004.jpeg'
        },
        {
            category: 'carreaux-20x30',
            name: 'PMCP 23006C',
            description: 'Carreau 20x30 PMCP 23006C',
            image: 'PMCP_23006.jpeg'
        },
        {
            category: 'carreaux-20x30',
            name: 'PMCP 23014',
            description: 'Carreau 20x30 PMCP 23014',
            image: 'PMCP_23014.jpeg'
        },
        // {
        //     category: 'carreaux-20x30',
        //     name: 'PMCP 23015C',
        //     description: 'Carreau 20x30 PMCP 23015C',
        //     image: ''
        // },
        // {
        //     category: 'carreaux-20x30',
        //     name: 'PMCP 23016C',
        //     description: 'Carreau 20x30 PMCP 23016C',
        //     image: ''
        // },
        {
            category: 'carreaux-20x30',
            name: 'PMCP 23017',
            description: 'Carreau 20x30 PMCP 23017',
            image: 'PMCP_23017.jpeg'
        },
        {
            category: 'carreaux-20x30',
            name: 'PMCP 23018',
            description: 'Carreau 20x30 PMCP 23018',
            image: 'PMCP_23018.jpeg'
        },
        {
            category: 'carreaux-20x30',
            name: 'PMCP 23022',
            description: 'Carreau 20x30 PMCP 23022',
            image: 'PMCP_23022.jpeg'
        },
        // {
        //     category: 'carreaux-20x30',
        //     name: 'PMCP 23023',
        //     description: 'Carreau 20x30 PMCP 23023',
        //     image: ''
        // },
        // {
        //     category: 'carreaux-20x30',
        //     name: 'PMCP 23033',
        //     description: 'Carreau 20x30 PMCP 23033',
        //     image: ''
        // },
        {
            category: 'carreaux-20x30',
            name: 'PMCP 23034',
            description: 'Carreau 20x30 PMCP 23034',
            image: 'PMCP_23034.jpeg'
        },
        {
            category: 'carreaux-20x30',
            name: 'PMCP 23036',
            description: 'Carreau 20x30 PMCP 23036',
            image: 'PMCP_23036.jpeg'
        },
        {
            category: 'carreaux-20x30',
            name: 'PMCP 23039',
            description: 'Carreau 20x30 PMCP 23039',
            image: 'PMCP_23039.jpeg'
        },
        // {
        //     category: 'carreaux-20x30',
        //     name: 'PMCP 23040',
        //     description: 'Carreau 20x30 PMCP 23040',
        //     image: ''
        // },
        {
            category: 'carreaux-20x30',
            name: 'PMCP 23041C',
            description: 'Carreau 20x30 PMCP 23041C',
            image: 'PMCP_23041.jpeg'
        },
        // {
        //     category: 'carreaux-20x30',
        //     name: 'PMCP 23065',
        //     description: 'Carreau 20x30 PMCP 23065',
        //     image: ''
        // },
        // {
        //     category: 'carreaux-20x30',
        //     name: 'PMCP 23074',
        //     description: 'Carreau 20x30 PMCP 23074',
        //     image: ''
        // },
        // {
        //     category: 'carreaux-20x30',
        //     name: 'PMCP 23515C',
        //     description: 'Carreau 20x30 PMCP 23515C',
        //     image: ''
        // },
        // {
        //     category: 'carreaux-20x30',
        //     name: 'PMCP 23618',
        //     description: 'Carreau 20x30 PMCP 23618',
        //     image: ''
        // },
        {
            category: 'carreaux-20x30',
            name: 'PMCP 239833C',
            description: 'Carreau 20x30 PMCP 239833C',
            image: 'PMCP_239833.jpeg'
        },

        // Carreaux 20x40
        {
            category: 'carreaux-20x40',
            name: '23302',
            description: 'Carreau 20x40 23302',
            image: '23302.jpeg'
        },
        {
            category: 'carreaux-20x40',
            name: '2D9901',
            description: 'Carreau 20x40 2D9901',
            image: '2D9901.jpeg'
        },
        {
            category: 'carreaux-20x40',
            name: 'P22132',
            description: 'Carreau 20x40 P22132',
            image: 'P22132.jpeg'
        },
        // {
        //     category: 'carreaux-20x40',
        //     name: 'W24017',
        //     description: 'Carreau 20x40 W24017',
        //     image: ''
        // },
        // {
        //     category: 'carreaux-20x40',
        //     name: 'W24022',
        //     description: 'Carreau 20x40 W24022',
        //     image: ''
        // },
        {
            category: 'carreaux-20x40',
            name: 'W24032C',
            description: 'Carreau 20x40 W24032C',
            image: 'W24032.jpeg'
        },
        {
            category: 'carreaux-20x40',
            name: 'W24048',
            description: 'Carreau 20x40 W24048',
            image: 'W24048.jpeg'
        },
        // {
        //     category: 'carreaux-20x40',
        //     name: 'W24056',
        //     description: 'Carreau 20x40 W24056',
        //     image: ''
        // },

        // Carreaux 25x40

        {
            category: 'carreaux-25x40',
            name: 'PMCP 4117C',
            description: 'Carreau 25x40 PMCP 4117C',
            image: 'PMCP_4117.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42001C',
            description: 'Carreau 25x40 PMCP 42001C',
            image: 'PMCP_42001.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42003',
            description: 'Carreau 25x40 PMCP 42003',
            image: 'PMCP_42003.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42005',
            description: 'Carreau 25x40 PMCP 42005',
            image: 'PMCP_42005.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42006',
            description: 'Carreau 25x40 PMCP 42006',
            image: 'PMCP_42006.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42012C',
            description: 'Carreau 25x40 PMCP 42012C',
            image: 'PMCP_42012.jpeg'
        },

        {
            category: 'carreaux-25x40',
            name: 'PMCP 42018',
            description: 'Carreau 25x40 PMCP 42018',
            image: 'PMCP_42018.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42019C',
            description: 'Carreau 25x40 PMCP 42019C',
            image: 'PMCP_42019.jpeg'
        },

        {
            category: 'carreaux-25x40',
            name: 'PMCP 42022C',
            description: 'Carreau 25x40 PMCP 42022C',
            image: 'PMCP_42022.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42023C',
            description: 'Carreau 25x40 PMCP 42023C',
            image: 'PMCP_42023.jpeg'
        },

        {
            category: 'carreaux-25x40',
            name: 'PMCP 42026',
            description: 'Carreau 25x40 PMCP 42026',
            image: 'PMCP_42026.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42027C',
            description: 'Carreau 25x40 PMCP 42027C',
            image: 'PMCP_42027.jpeg'
        },

        {
            category: 'carreaux-25x40',
            name: 'PMCP 42029C',
            description: 'Carreau 25x40 PMCP 42029C',
            image: 'PMCP_42029.jpeg'
        },

        {
            category: 'carreaux-25x40',
            name: 'PMCP 42032',
            description: 'Carreau 25x40 PMCP 42032',
            image: 'PMCP_42032.jpeg'
        },

        {
            category: 'carreaux-25x40',
            name: 'PMCP 42035C',
            description: 'Carreau 25x40 PMCP 42035C',
            image: 'PMCP_42035.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42037C',
            description: 'Carreau 25x40 PMCP 42037C',
            image: 'PMCP_42037.jpeg'
        },

        {
            category: 'carreaux-25x40',
            name: 'PMCP 42041C',
            description: 'Carreau 25x40 PMCP 42041C',
            image: 'PMCP_42041.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42042C',
            description: 'Carreau 25x40 PMCP 42042C',
            image: 'PMCP_42042.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42043C',
            description: 'Carreau 25x40 PMCP 42043C',
            image: 'PMCP_42043.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42044',
            description: 'Carreau 25x40 PMCP 42044',
            image: 'PMCP_42044.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42047C',
            description: 'Carreau 25x40 PMCP 42047C',
            image: 'PMCP_42047.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42049',
            description: 'Carreau 25x40 PMCP 42049',
            image: 'PMCP_42049.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42053C',
            description: 'Carreau 25x40 PMCP 42053C',
            image: 'PMCP_42053.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42054C',
            description: 'Carreau 25x40 PMCP 42054C',
            image: 'PMCP_42054.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42055C',
            description: 'Carreau 25x40 PMCP 42055C',
            image: 'PMCP_42055.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42059',
            description: 'Carreau 25x40 PMCP 42059',
            image: 'PMCP_42059.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42060',
            description: 'Carreau 25x40 PMCP 42060',
            image: 'PMCP_42060.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42064',
            description: 'Carreau 25x40 PMCP 42064',
            image: 'PMCP_42064.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42065',
            description: 'Carreau 25x40 PMCP 42065',
            image: 'PMCP_42065.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42067',
            description: 'Carreau 25x40 PMCP 42067',
            image: 'PMCP_42067.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42069',
            description: 'Carreau 25x40 PMCP 42069',
            image: 'PMCP_42069.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42070',
            description: 'Carreau 25x40 PMCP 42070',
            image: 'PMCP_42070.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42072',
            description: 'Carreau 25x40 PMCP 42072',
            image: 'PMCP_42072.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42073',
            description: 'Carreau 25x40 PMCP 42073',
            image: 'PMCP_42073.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42074',
            description: 'Carreau 25x40 PMCP 42074',
            image: 'PMCP_42074.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42075',
            description: 'Carreau 25x40 PMCP 42075',
            image: 'PMCP_42075.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42076',
            description: 'Carreau 25x40 PMCP 42076',
            image: 'PMCP_42076.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42078',
            description: 'Carreau 25x40 PMCP 42078',
            image: 'PMCP_42078.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42079',
            description: 'Carreau 25x40 PMCP 42079',
            image: 'PMCP_42079.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42080',
            description: 'Carreau 25x40 PMCP 42080',
            image: 'PMCP_42080.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42081',
            description: 'Carreau 25x40 PMCP 42081',
            image: 'PMCP_42081.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42082',
            description: 'Carreau 25x40 PMCP 42082',
            image: 'PMCP_42082.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 42083',
            description: 'Carreau 25x40 PMCP 42083',
            image: 'PMCP_42083.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 4229G',
            description: 'Carreau 25x40 PMCP 4229G',
            image: 'PMCP_4229.jpeg'
        },
        {
            category: 'carreaux-25x40',
            name: 'PMCP 4583C',
            description: 'Carreau 25x40 PMCP 4583C',
            image: 'PMCP_4583.jpeg'
        },

        {
            category: 'carreaux-25x40',
            name: 'PMCP 4639',
            description: 'Carreau 25x40 PMCP 4639',
            image: 'PMCP_4639.jpeg'
        },

        // Carreaux 30x30
        /* ==================== CARREAUX 30x30 FGP ==================== */
        {
            category: 'carreaux-30x30',
            name: 'FGP 33005',
            description: 'Carreau 30x30 FGP 33005',
            image: 'FGP33005.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33010',
            description: 'Carreau 30x30 FGP 33010',
            image: 'FGP33010.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33015',
            description: 'Carreau 30x30 FGP 33015',
            image: 'FGP33015.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33020',
            description: 'Carreau 30x30 FGP 33020',
            image: 'FGP33020.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33021',
            description: 'Carreau 30x30 FGP 33021',
            image: 'FGP33021.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33022',
            description: 'Carreau 30x30 FGP 33022',
            image: 'FGP33022.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33023',
            description: 'Carreau 30x30 FGP 33023',
            image: 'FGP33023.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33024',
            description: 'Carreau 30x30 FGP 33024',
            image: 'FGP33024.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33025',
            description: 'Carreau 30x30 FGP 33025',
            image: 'FGP33025.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33026',
            description: 'Carreau 30x30 FGP 33026',
            image: 'FGP33026.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33027',
            description: 'Carreau 30x30 FGP 33027',
            image: 'FGP33027.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33028',
            description: 'Carreau 30x30 FGP 33028',
            image: 'FGP33028.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33029',
            description: 'Carreau 30x30 FGP 33029',
            image: 'FGP33029.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33032',
            description: 'Carreau 30x30 FGP 33032',
            image: 'FGP33032.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33034',
            description: 'Carreau 30x30 FGP 33034',
            image: 'FGP33034.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33035',
            description: 'Carreau 30x30 FGP 33035',
            image: 'FGP33035.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33036',
            description: 'Carreau 30x30 FGP 33036',
            image: 'FGP33036.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33038',
            description: 'Carreau 30x30 FGP 33038',
            image: 'FGP33038.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33039',
            description: 'Carreau 30x30 FGP 33039',
            image: 'FGP33039.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33112',
            description: 'Carreau 30x30 FGP 33112',
            image: 'FGP33112.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33126',
            description: 'Carreau 30x30 FGP 33126',
            image: 'FGP33126.jpg'
        },
        {
            category: 'carreaux-30x30',
            name: 'FGP 33130',
            description: 'Carreau 30x30 FGP 33130',
            image: 'FGP33130.jpg'
        },
        /* ==================== CARREAUX 30x30 NM ==================== */
        {
            category: 'carreaux-30x30',
            name: 'NM 33001',
            description: 'Carreau 30x30 NM 33001',
            image: 'NM33001.jpeg'
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33003',
            description: 'Carreau 30x30 NM 33003',
            image: 'NM33003.jpeg'
        },

        {
            category: 'carreaux-30x30',
            name: 'NM 33021',
            description: 'Carreau 30x30 NM 33021',
            image: 'NM33021.jpeg'
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33041',
            description: 'Carreau 30x30 NM 33041',
            image: 'NM33041.jpeg'
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33043',
            description: 'Carreau 30x30 NM 33043',
            image: 'NM33043.jpeg'
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33091',
            description: 'Carreau 30x30 NM 33091',
            image: 'NM33091.jpeg'
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33101',
            description: 'Carreau 30x30 NM 33101',
            image: 'NM33101.jpeg'
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33171',
            description: 'Carreau 30x30 NM 33171',
            image: 'NM33171.jpeg'
        },

        {
            category: 'carreaux-30x30',
            name: 'NM 33233',
            description: 'Carreau 30x30 NM 33233',
            image: 'NM33233.jpeg'
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33281',
            description: 'Carreau 30x30 NM 33281',
            image: 'NM33281.jpeg'
        },

        /* ==================== CARREAUX 30x30 NMC ==================== */
        {
            category: 'carreaux-30x30',
            name: 'NMC 33005',
            description: 'Carreau 30x30 NMC 33005',
            image: 'NMC33005.jpeg'
        },
        {
            category: 'carreaux-30x30',
            name: 'NMC 33095',
            description: 'Carreau 30x30 NMC 33095',

            image: 'NMC33095.jpeg'
        },
        {
            category: 'carreaux-30x30',
            name: 'NMC 33105',
            description: 'Carreau 30x30 NMC 33105',

            image: 'NMC33105.jpeg'
        },
        {
            category: 'carreaux-30x30',
            name: 'NMC 33225',
            description: 'Carreau 30x30 NMC 33225',

            image: 'NMC33225.jpeg'
        },
        {
            category: 'carreaux-30x30',
            name: 'NMC 33285',
            description: 'Carreau 30x30 NMC 33285',

            image: 'NMC33285.jpeg'
        },

        /* ==================== CARREAUX 30x30 YM ==================== */



        // Carreaux 30x60
        {
            category: 'carreaux-30x60',
            name: 'PMCP 36001',
            description: 'Carreau 30x60 PMCP 36001',
            image: 'PMCP36001.jpeg'
        },
        {
            category: 'carreaux-30x60',
            name: 'PMCP 36002',
            description: 'Carreau 30x60 PMCP 36002',
            image: 'PMCP36002.jpeg'
        },
        {
            category: 'carreaux-30x60',
            name: 'PMCP 36003',
            description: 'Carreau 30x60 PMCP 36003',
            image: 'PMCP36003.jpeg'
        },
        {
            category: 'carreaux-30x60',
            name: 'PMCP 36004',
            description: 'Carreau 30x60 PMCP 36004',
            image: 'PMCP36004.jpeg'
        },
        {
            category: 'carreaux-30x60',
            name: 'PMCP 36005',
            description: 'Carreau 30x60 PMCP 36005',
            image: 'PMCP36005.jpeg'
        },
        {
            category: 'carreaux-30x60',
            name: 'PMCP 36006',
            description: 'Carreau 30x60 PMCP 36006',
            image: 'PMCP36006.jpeg'
        },
        {
            category: 'carreaux-30x60',
            name: 'PMCP 36007',
            description: 'Carreau 30x60 PMCP 36007',
            image: 'PMCP36007.jpeg'
        },
        {
            category: 'carreaux-30x60',
            name: 'PMCP 36010',
            description: 'Carreau 30x60 PMCP 36010',
            image: 'PMCP36010.jpeg'
        },
        // Carreaux 40x40
        {
            category: 'carreaux-40x40',
            name: 'FGP 44005',
            description: 'Carreau 40x40 FGP 44005',
            image: 'FGP44005.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44007',
            description: 'Carreau 40x40 FGP 44007',
            image: 'FGP44007.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44008',
            description: 'Carreau 40x40 FGP 44008',
            image: 'FGP44008.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44009',
            description: 'Carreau 40x40 FGP 44009',
            image: 'FGP44009.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44012',
            description: 'Carreau 40x40 FGP 44012',
            image: 'FGP44012.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44013',
            description: 'Carreau 40x40 FGP 44013',
            image: 'FGP44013.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44021',
            description: 'Carreau 40x40 FGP 44021',
            image: 'FGP44021.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44022',
            description: 'Carreau 40x40 FGP 44022',
            image: 'FGP44022.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44026',
            description: 'Carreau 40x40 FGP 44026',
            image: 'FGP44026.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44027',
            description: 'Carreau 40x40 FGP 44027',
            image: 'FGP44027.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44005',
            description: 'Carreau 40x40 FGP 44005',
            image: 'FGP44005.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44028',
            description: 'Carreau 40x40 FGP 44028',
            image: 'FGP44028.jpeg'
        },

        {
            category: 'carreaux-40x40',
            name: 'FGP 44031',
            description: 'Carreau 40x40 FGP 44031',
            image: 'FGP44031.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44032',
            description: 'Carreau 40x40 FGP 44032',
            image: 'FGP44032.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44033',
            description: 'Carreau 40x40 FGP 44033',
            image: 'FGP44033.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44035',
            description: 'Carreau 40x40 FGP 44035',
            image: 'FGP44035.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44040',
            description: 'Carreau 40x40 FGP 44040',
            image: 'FGP44040.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44041',
            description: 'Carreau 40x40 FGP 44041',
            image: 'FGP44041.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44042',
            description: 'Carreau 40x40 FGP 44042',
            image: 'FGP44042.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44043',
            description: 'Carreau 40x40 FGP 44043',
            image: 'FGP44043.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44044',
            description: 'Carreau 40x40 FGP 44044',
            image: 'FGP44044.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'FGP 44179',
            description: 'Carreau 40x40 FGP 44179',
            image: 'FGP44179.jpeg'
        },
        /* ===== NM ===== */
        {
            id: "NM 44001",
            category: "carreaux-30x30",
            image: "NM44001.jpg",
            stock: 410,
            disponible: true
        },
        /* ===== NMC ===== */
        {
            id: "NMC 44005",
            category: "carreaux-30x30",
            image: "nmc44005.jpg",
            stock: 282,
            disponible: true
        },
        //===========40X40 YMG===================
        {
            category: 'carreaux-40x40',
            name: 'YMG 44002',
            description: 'Carreau 40x40 YMG 44002',
            image: 'YMG44002.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44003',
            description: 'Carreau 40x40 YMG 44003',
            image: 'YMG44003.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44004',
            description: 'Carreau 40x40 YMG 44004',
            image: 'YMG44004.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44008',
            description: 'Carreau 40x40 YMG 44008',
            image: 'YMG44008.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44009',
            description: 'Carreau 40x40 YMG 44009',
            image: 'YMG44009.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44012',
            description: 'Carreau 40x40 YMG 44012',
            image: 'YMG44012.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44017',
            description: 'Carreau 40x40 YMG 44017',
            image: 'YMG44017.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44022',
            description: 'Carreau 40x40 YMG 44022',
            image: 'YMG44022.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44024',
            description: 'Carreau 40x40 YMG 44024',
            image: 'YMG44024.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44025',
            description: 'Carreau 40x40 YMG 44025',
            image: 'YMG44025.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44032',
            description: 'Carreau 40x40 YMG 44032',
            image: 'YMG44032.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44034',
            description: 'Carreau 40x40 YMG 44034',
            image: 'YMG44034.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44043',
            description: 'Carreau 40x40 YMG 44043',
            image: 'YMG44043.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44044',
            description: 'Carreau 40x40 YMG 44044',
            image: 'YMG44044.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44046',
            description: 'Carreau 40x40 YMG 44046',
            image: 'YMG44046.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44048',
            description: 'Carreau 40x40 YMG 44048',
            image: 'YMG44048.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44050',
            description: 'Carreau 40x40 YMG 44050',
            image: 'YMG44050.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44051',
            description: 'Carreau 40x40 YMG 44051',
            image: 'YMG44051.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44052',
            description: 'Carreau 40x40 YMG 44052',
            image: 'YMG44052.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44055',
            description: 'Carreau 40x40 YMG 44055',
            image: 'YMG44055.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44056',
            description: 'Carreau 40x40 YMG 44056',
            image: 'YMG44056.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44057',
            description: 'Carreau 40x40 YMG 44057',
            image: 'YMG44057.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44059',
            description: 'Carreau 40x40 YMG 44059',
            image: 'YMG44059.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44060',
            description: 'Carreau 40x40 YMG 44060',
            image: 'YMG44060.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44061',
            description: 'Carreau 40x40 YMG 44061',
            image: 'YMG44061.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44062',
            description: 'Carreau 40x40 YMG 44062',
            image: 'YMG44062.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44063',
            description: 'Carreau 40x40 YMG 44063',
            image: 'YMG44063.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44223',
            description: 'Carreau 40x40 YMG 44223',
            image: 'YMG44223.jpeg'
        },
        {
            category: 'carreaux-40x40',
            name: 'YMG 44224',
            description: 'Carreau 40x40 YMG 44224',
            image: 'YMG44224.jpeg'
        },
        // Carreaux 50x50
        {
            category: 'carreaux-50x50',
            name: 'Carreau 50x50',
            description: 'Carreau extra large.',
            image: ''
        },
        // Carreaux 60x60
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66001',
            description: 'Carreau 60x60 FGC 66001',
            image: 'FGC66001.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66003',
            description: 'Carreau 60x60 FGC 66003',
            image: 'FGC66003.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66006',
            description: 'Carreau 60x60 FGC 66006',
            image: 'FGC66006.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66007',
            description: 'Carreau 60x60 FGC 66007',
            image: 'FGC66007.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66008',
            description: 'Carreau 60x60 FGC 66008',
            image: 'FGC66008.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66009',
            description: 'Carreau 60x60 FGC 66009',
            image: 'FGC66009.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 660010',
            description: 'Carreau 60x60 FGC 66010',
            image: 'FGC66010.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66011',
            description: 'Carreau 60x60 FGC 66011',
            image: 'FGC66011.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66012',
            description: 'Carreau 60x60 FGC 66012',
            image: 'FGC66012.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66022',
            description: 'Carreau 60x60 FGC 66022',
            image: 'FGC66022.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66023',
            description: 'Carreau 60x60 FGC 66023',
            image: 'FGC66023.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66024',
            description: 'Carreau 60x60 FGC 66024',
            image: 'FGC66024.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66025',
            description: 'Carreau 60x60 FGC 66025',
            image: 'FGC66025.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66026',
            description: 'Carreau 60x60 FGC 66026',
            image: 'FGC66026.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66027',
            description: 'Carreau 60x60 FGC 66027',
            image: 'FGC66027.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66028',
            description: 'Carreau 60x60 FGC 66028',
            image: 'FGC66028.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau FGC 66029',
            description: 'Carreau 60x60 FGC 66029',
            image: 'FGC66029.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66001',
            description: 'Carreau 60x60 YMP 66001',
            image: 'YMP66001.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66004',
            description: 'Carreau 60x60 YMP 66004',
            image: 'YMP66004.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66006',
            description: 'Carreau 60x60 YMP 66006',
            image: 'YMP66006.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66007',
            description: 'Carreau 60x60 YMP 66007',
            image: 'YMP66007.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66008',
            description: 'Carreau 60x60 YMP 66008',
            image: 'YMP66008.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66009',
            description: 'Carreau 60x60 YMP 66009',
            image: 'YMP66009.jpeg', //
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66010',
            description: 'Carreau 60x60 YMP 66010',
            image: 'YMP66010.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66011',
            description: 'Carreau 60x60 YMP 66011',
            image: 'YMP66011.jpeg', //
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66012',
            description: 'Carreau 60x60 YMP 66012',
            image: 'YMP66012.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66013',
            description: 'Carreau 60x60 YMP 66013',
            image: 'YMP66013.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66022',
            description: 'Carreau 60x60 YMP 66022',
            image: 'YMP66022.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66024',
            description: 'Carreau 60x60 YMP 66024',
            image: 'YMP66024.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66028',
            description: 'Carreau 60x60 YMP 66028',
            image: 'YMP66028.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66031',
            description: 'Carreau 60x60 YMP 66031',
            image: 'YMP66031.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66032',
            description: 'Carreau 60x60 YMP 66032',
            image: 'YMP66032.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66036',
            description: 'Carreau 60x60 YMP 66036',
            image: 'YMP66036.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66038',
            description: 'Carreau 60x60 YMP 66038',
            image: 'YMP66038.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66039',
            description: 'Carreau 60x60 YMP 66039',
            image: 'YMP66039.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66042',
            description: 'Carreau 60x60 YMP 66042',
            image: 'YMP66042.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66047',
            description: 'Carreau 60x60 YMP 66047',
            image: 'YMP66047.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66050',
            description: 'Carreau 60x60 YMP 66050',
            image: 'YMP66050.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66051',
            description: 'Carreau 60x60 YMP 66051',
            image: 'YMP66051.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66052',
            description: 'Carreau 60x60 YMP 66052',
            image: 'YMP66052.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66053',
            description: 'Carreau 60x60 YMP 66053',
            image: 'YMP66053.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66055',
            description: 'Carreau 60x60 YMP 66055',
            image: 'YMP66055.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66113',
            description: 'Carreau 60x60 YMP 66113',
            image: 'YMP66113.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66135',
            description: 'Carreau 60x60 YMP 66135',
            image: 'YMP66135.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66137',
            description: 'Carreau 60x60 YMP 66137',
            image: 'YMP66137.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMP 66992',
            description: 'Carreau 60x60 YMP 66992',
            image: 'YMP66992.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMG 66001',
            description: 'Carreau 60x60 YMG 66001',
            image: 'YMG66001.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMG 66002',
            description: 'Carreau 60x60 YMG 66002',
            image: 'YMG66002.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMG 66005',
            description: 'Carreau 60x60 YMG 66005',
            image: 'YMG66005.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMG 66010',
            description: 'Carreau 60x60 YMG 66010',
            image: 'YMG66010.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMG 66012',
            description: 'Carreau 60x60 YMG 66012',
            image: 'YMG66012.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMG 66013',
            description: 'Carreau 60x60 YMG 66013',
            image: 'YMG66013.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMG 66023',
            description: 'Carreau 60x60 YMG 66023',
            image: 'YMG66023.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMG 66025',
            description: 'Carreau 60x60 YMG 66025',
            image: 'YMG66025.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau YMG 66027',
            description: 'Carreau 60x60 YMG 66027',
            image: 'YMG66027.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau PGS 66026 ',
            description: 'Carreau 60x60 PGS 66026',
            image: 'PGS66026.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau PGS 66029 ',
            description: 'Carreau 60x60 PGS 66029',
            image: 'PGS66029.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau PGS 66222 ',
            description: 'Carreau 60x60 PGS 66222',
            image: 'PGS66222.jpeg',
        },
        // {
        //     category: 'carreaux-60x60',
        //     name: 'Carreau PGS 66267 ',
        //     description: 'Carreau 60x60 PGS 66267',
        //     image: 'PGS66267.jpeg',
        // },
        {
            category: 'carreaux-60x60',
            name: 'Carreau PGS 66281 ',
            description: 'Carreau 60x60 PGS 66281',
            image: 'PGS66281.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau PGP 66001 ',
            description: 'Carreau 60x60 PGP 66001',
            image: 'PGP66001.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau PGP 66005 ',
            description: 'Carreau 60x60 PGP 66005',
            image: 'PGP66005.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau PGP 66007 ',
            description: 'Carreau 60x60 PGP 66007',
            image: 'PGP66007.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau PGC 66001 ',
            description: 'Carreau 60x60 PGC 66001',
            image: 'PGC66001.jpeg',
        },
        {
            category: 'carreaux-60x60',
            name: 'Carreau PGC 66009 ',
            description: 'Carreau 60x60 PGC 66009',
            image: 'PGC66009.jpeg',
        },


        // Carreaux 60x120
        {
            category: 'carreaux-60x120',
            name: 'Carreau YMP 612001',
            description: 'Carreau 60X120 YMP 612001',
            image: 'YMP612001.jpeg',
        },
        {
            category: 'carreaux-60x120',
            name: 'Carreau YMP 612002',
            description: 'Carreau 60X120 YMP 612002',
            image: 'YMP612002.jpeg',
        },
        {
            category: 'carreaux-60x120',
            name: 'Carreau YMP 612003',
            description: 'Carreau 60X120 YMP 612003',
            image: 'YMP612003.jpeg',
        },
        {
            category: 'carreaux-60x120',
            name: 'Carreau YMP 612004',
            description: 'Carreau 60X120 YMP 612004',
            image: 'YMP612004.jpeg',
        },
        {
            category: 'carreaux-60x120',
            name: 'Carreau YMP 612005',
            description: 'Carreau 60X120 YMP 612005',
            image: 'YMP612005.jpeg',
        },
        {
            category: 'carreaux-60x120',
            name: 'Carreau YMP 612008',
            description: 'Carreau 60X120 YMP 612008',
            image: 'YMP612008.jpeg',
        },
        {
            category: 'carreaux-60x120',
            name: 'Carreau YMP 612009',
            description: 'Carreau 60X120 YMP 612009',
            image: 'YMP612009.jpeg',
        },
        {
            category: 'carreaux-60x120',
            name: 'Carreau YMP 612012',
            description: 'Carreau 60X120 YMP 612012',
            image: 'YMP612012.jpeg',
        },
        {
            category: 'carreaux-60x120',
            name: 'Carreau YMP 612014',
            description: 'Carreau 60X120 YMP 612014',
            image: 'YMP612014.jpeg',
        },
        // Tôle
        {
            category: 'tole',
            name: 'Tôle ondulé',
            description: 'Tôle ondulé aluminium nature disponible en socatrale et importer 2m et 3m.',
            image: 'TOLE_ONDULEE.jpeg'
        },
        {
            category: 'tole',
            name: 'Tôle bac',
            description: 'Tôle bac disponible en nature et laqué ',
            image: 'tolebac.jpeg'
        },
        // Accessoire
        {
            category: 'accessoire',
            name: 'Naissance gouttière',
            description: 'Naissance gouttière pour tôle bac.',
            image: 'naissancegouttiere.jpeg'
        },
        {
            category: 'accessoire',
            name: 'Gouttière',
            description: 'Gouttière pour tôle bac.',
            image: 'goutiere.jpeg'
        },
        // Ciment Colle
        {
            category: 'ciment-colle',
            name: 'Ciment colle multiflex',
            description: 'Ciment colle blanc pour carreaux.',
            image: 'multiflexe.jpeg'
        },
        {
            category: 'ciment-colle',
            name: 'Ciment colle flexicol',
            description: 'Ciment colle gris pour carreaux.',
            image: 'flexicol.jpeg'
        },
    ];

    const containers = document.querySelectorAll('.cards-container');
    containers.forEach(container => {
        const category = container.getAttribute('data-category');
        const filteredProducts = products.filter(product => product.category === category);
        filteredProducts.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.setProperty('--card-index', index);
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <button class="btn whatsapp-btn open-whatsapp-modal"
                    style="margin-bottom:10px"
                    data-name="${product.name}"
                    data-description="${product.description}"
                    data-image="${product.image}">
                    WhatsApp
                </button>
                <a href="${product.image}" download class="btn download-btn">Télécharger</a>
            `;
            container.appendChild(card);
        });
    });

    // Menu Modal
    const menuBtn = document.getElementById('menu-btn');
    const menuModal = document.getElementById('menu-modal');
    const menuClose = document.getElementById('menu-close');
    const menuOverlay = menuModal.querySelector('.modal-overlay');

    menuBtn.addEventListener('click', () => {
        menuModal.classList.add('active');
        document.body.classList.add('modal-open');
    });

    menuClose.addEventListener('click', () => {
        menuModal.classList.remove('active');
        document.body.classList.remove('modal-open');
    });

    menuOverlay.addEventListener('click', () => {
        menuModal.classList.remove('active');
        document.body.classList.remove('modal-open');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuModal.classList.remove('active');
            document.body.classList.remove('modal-open');
        });
    });

    // Search Modal
    const searchBtn = document.getElementById('search-btn');
    const searchModal = document.getElementById('search-modal');
    const searchClose = document.getElementById('search-close');
    const searchOverlay = searchModal.querySelector('.modal-overlay');
    const searchInput = document.getElementById('search-input');
    const searchList = document.getElementById('search-list');
    const searchResult = document.getElementById('search-result');

    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        document.body.classList.add('modal-open');
        populateList();
        searchInput.value = '';
        searchResult.innerHTML = '';
        searchInput.focus();
    });

    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        searchResult.innerHTML = '';
        searchInput.value = '';
    });

    searchOverlay.addEventListener('click', () => {
        searchModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        searchResult.innerHTML = '';
        searchInput.value = '';
    });

    // Sort products alphabetically
    const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));

    function populateList(filter = '') {
        searchList.innerHTML = '';
        const filtered = sortedProducts.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
        filtered.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product.name;
            li.addEventListener('click', () => showProduct(product));
            searchList.appendChild(li);
        });
    }

    function showProduct(product) {
        searchResult.innerHTML = `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        </div>
    `;
    }

    searchInput.addEventListener('input', (e) => {
        populateList(e.target.value);
    });
});

// ================= WHATSAPP MODAL =================

const whatsappModal = document.getElementById('whatsapp-modal');
const whatsappClose = document.getElementById('whatsapp-close');
const whatsappOverlay = whatsappModal.querySelector('.modal-overlay');

let currentProduct = {};

// ouvrir modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('open-whatsapp-modal')) {

        currentProduct = {
            name: e.target.dataset.name,
            description: e.target.dataset.description,
            image: e.target.dataset.image
        };

        whatsappModal.classList.add('active');
        document.body.classList.add('modal-open');
    }
});

// fermer modal
whatsappClose.addEventListener('click', closeWhatsappModal);
whatsappOverlay.addEventListener('click', closeWhatsappModal);

function closeWhatsappModal() {
    whatsappModal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// gestion des liens
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const number = link.dataset.number;

        const message = `Bonjour, je suis intéressé par ${currentProduct.name}.
Description: ${currentProduct.description}
Image: ${currentProduct.image}`;

        const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    });
});

document.querySelectorAll('.contact').forEach(function(contact) {
    contact.addEventListener('click', function(e) {
        e.preventDefault();

        var number = this.dataset.number;

        var baseURL = "https://catalogue-chez-pilote-construction.vercel.app/";

        var name = currentProduct && currentProduct.name ? currentProduct.name : "Non précisé";
        var description = currentProduct && currentProduct.description ? currentProduct.description : "Non précisée";
        var image = currentProduct && currentProduct.image ? baseURL + currentProduct.image : "Non disponible";

        var message = "Bonjour 👋,\n\n" +
            "Je souhaite avoir plus d’informations sur le produit suivant :\n\n" +
            "━━━━━━━━━━━━━━━\n" +
            "📦 Nom : " + name + "\n" +
            "📝 Description : " + description + "\n" +
            "🖼️ Image : " + image + "\n" +
            "━━━━━━━━━━━━━━━\n\n" +
            "Merci de bien vouloir me répondre 🙏";

        var url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

        window.open(url, '_blank');
    });
});