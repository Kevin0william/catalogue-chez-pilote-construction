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
            image: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33003',
            description: 'Carreau 30x30 NM 33003',
            image: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33005',
            description: 'Carreau 30x30 NM 33005',
            image: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33021',
            description: 'Carreau 30x30 NM 33021',
            image: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33041',
            description: 'Carreau 30x30 NM 33041',
            image: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33091',
            description: 'Carreau 30x30 NM 33091',
            image: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33101',
            description: 'Carreau 30x30 NM 33101',
            image: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33171',
            description: 'Carreau 30x30 NM 33171',
            image: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33225',
            description: 'Carreau 30x30 NM 33225',
            image: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33233',
            description: 'Carreau 30x30 NM 33281',
            image: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NM 33281',
            description: 'Carreau 30x30 NM 33281',
            image: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NMC 33005',
            description: 'Carreau 30x30 NMC 33005',

            mage: ''
        },
        /* ==================== CARREAUX 30x30 NMC ==================== */
        {
            category: 'carreaux-30x30',
            name: 'NMC 33095',
            description: 'Carreau 30x30 NMC 33095',

            mage: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NMC 33105',
            description: 'Carreau 30x30 NMC 33105',

            mage: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'NMC 33225',
            description: 'Carreau 30x30 NMC 33225',

            mage: ''
        },

        /* ==================== CARREAUX 30x30 YM ==================== */
        {
            category: 'carreaux-30x30',
            name: 'YM 33031',
            description: 'Carreau 30x30 YM 33031',
            mage: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'YM 33064',
            description: 'Carreau 30x30 YM 33064',
            mage: ''
        },
        {
            category: 'carreaux-30x30',
            name: 'YM 33191',
            description: 'Carreau 30x30 YM 33191',
            mage: ''
        },



        // Carreaux 30x60
        {
            category: 'carreaux-30x60',
            name: 'Carreau Grand 30x60',
            description: 'Carreau grand pour sols spacieux.',
            image: ''
        },
        // Carreaux 40x40
        {
            category: 'carreaux-40x40',
            name: 'Carreau 40x40',
            description: 'Carreau large et robuste.',
            image: ''
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
            name: 'Carreau 60x60',
            description: 'Carreau très grand pour projets industriels.',
            image: ''
        },
        // Carreaux 60x120
        {
            category: 'carreaux-60x120',
            name: 'Carreau Rectangulaire 60x120',
            description: 'Carreau rectangulaire extra long.',
            image: ''
        },
        // Tôle
        {
            category: 'tole',
            name: 'Tôle ondulé',
            description: 'Tôle ondulé aluminium nature disponible en socatrale et importer',
            image: 'Tole_ondulee.jpeg'
        },
        {
            category: 'tole',
            name: 'Tôle Acier',
            description: 'Tôle en acier pour constructions.',
            image: ''
        },
        // Accessoire
        {
            category: 'accessoire',
            name: 'Joint Silicone',
            description: 'Joint silicone pour étanchéité.',
            image: ''
        },
        {
            category: 'accessoire',
            name: 'Croix Espacement',
            description: 'Croix pour espacement des carreaux.',
            image: ''
        },
        // Ciment Colle
        {
            category: 'ciment-colle',
            name: 'Ciment Colle Blanc',
            description: 'Ciment colle blanc pour carreaux.',
            image: ''
        },
        {
            category: 'ciment-colle',
            name: 'Colle Époxy',
            description: 'Colle époxy résistante.',
            image: ''
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














const products = [
    /* ── carreaux-20x20 ── */
    {
        id: "FGP 22003C",
        category: "carreaux-20x20",
        image: "FGP_22003.jpeg",
        disponible: true
    }, {
        id: "FGP 22005C",
        category: "carreaux-20x20",
        image: "FGP_22005.jpeg",
        disponible: true
    }, {
        id: "FGP 22006C",
        category: "carreaux-20x20",
        image: "FGP_22006.jpeg",
        disponible: true
    }, {
        id: "FGP 22007C",
        category: "carreaux-20x20",
        image: "FGP_22007.jpeg",
        disponible: true
    }, {
        id: "FGP 22008",
        category: "carreaux-20x20",
        image: "FGP_22008.jpeg",
        disponible: false
    }, // hidden
    {
        id: "FGP 22009",
        category: "carreaux-20x20",
        image: "FGP_22009.jpeg",
        disponible: true
    }, {
        id: "FGP 22011C",
        category: "carreaux-20x20",
        image: "FGP_22011.jpeg",
        disponible: true
    }, {
        id: "FGP 22012",
        category: "carreaux-20x20",
        image: "FGP_22012.jpeg",
        disponible: true
    }, {
        id: "FGP 22013C",
        category: "carreaux-20x20",
        image: "FGP_22013.jpeg",
        disponible: true
    }, {
        id: "FGP 22014",
        category: "carreaux-20x20",
        image: "FGP_22014.jpeg",
        disponible: true
    }, {
        id: "FGP 22015C",
        category: "carreaux-20x20",
        image: "FGP_22015.jpeg",
        disponible: true
    }, {
        id: "FGP 22016C",
        category: "carreaux-20x20",
        image: "FGP_22016.jpeg",
        disponible: true
    }, {
        id: "FGP 22017",
        category: "carreaux-20x20",
        image: "FGP_22017.jpeg",
        disponible: true
    }, {
        id: "YM 22024",
        category: "carreaux-20x20",
        image: "YM_22024.jpeg",
        disponible: true
    },

    /* ── carreaux-20x30 ── */
    {
        id: "PMCP 23001C",
        category: "carreaux-20x30",
        image: "PMCP_23001.jpeg",
        disponible: true
    }, {
        id: "PMCP 23004C",
        category: "carreaux-20x30",
        image: "PMCP_23004.jpeg",
        disponible: true
    }, {
        id: "PMCP 23006C",
        category: "carreaux-20x30",
        image: "PMCP_23006.jpeg",
        disponible: true
    }, {
        id: "PMCP 23014",
        category: "carreaux-20x30",
        image: "PMCP_23014.jpeg",
        disponible: true
    },
    //  {
    //     id: "PMCP 23015C",
    //     category: "carreaux-20x30",
    //     image: "",
    //     disponible: true
    // }, {
    //     id: "PMCP 23016C",
    //     category: "carreaux-20x30",
    //     image: "",
    //     disponible: true
    // }, 
    {
        id: "PMCP 23017",
        category: "carreaux-20x30",
        image: "PMCP_23017.jpeg",
        disponible: false
    }, // hidden
    {
        id: "PMCP 23018",
        category: "carreaux-20x30",
        image: "PMCP_23018.jpeg",
        disponible: true
    }, {
        id: "PMCP 23022",
        category: "carreaux-20x30",
        image: "PMCP_23022.jpeg",
        disponible: true
    },
    // {
    //     id: "PMCP 23023",
    //     category: "carreaux-20x30",
    //     image: "PMCP_23023.jpeg",
    //     disponible: true
    // }, {
    //     id: "PMCP 23033",
    //     category: "carreaux-20x30",
    //     image: "",
    //     disponible: true
    // }, 
    {
        id: "PMCP 23034",
        category: "carreaux-20x30",
        image: "PMCP_23034.jpeg",
        disponible: true
    }, {
        id: "PMCP 23036",
        category: "carreaux-20x30",
        image: "PMCP_23036.jpeg",
        disponible: true
    }, {
        id: "PMCP 23039",
        category: "carreaux-20x30",
        image: "PMCP_23039.jpeg",
        disponible: true
    },
    // {
    //     id: "PMCP 23040",
    //     category: "carreaux-20x30",
    //     image: "",
    //     disponible: true
    // }, 
    {
        id: "PMCP 23041C",
        category: "carreaux-20x30",
        image: "PMCP_23041.jpeg",
        disponible: true
    },
    // {
    //     id: "PMCP 23065",
    //     category: "carreaux-20x30",
    //     image: "",
    //     disponible: true
    // }, {
    //     id: "PMCP 23074",
    //     category: "carreaux-20x30",
    //     image: "",
    //     disponible: true
    // }, {
    //     id: "PMCP 23515C",
    //     category: "carreaux-20x30",
    //     image: "",
    //     disponible: true
    // }, {
    //     id: "PMCP 23618",
    //     category: "carreaux-20x30",
    //     image: "",
    //     disponible: true
    // }, 
    {
        id: "PMCP 239833C",
        category: "carreaux-20x30",
        image: "PMCP_239833.jpeg",
        disponible: true
    },

    /* ── carreaux-20x40 ── */
    {
        id: "23302",
        category: "carreaux-20x40",
        image: "23302.jpeg",
        disponible: true
    }, {
        id: "2D9901",
        category: "carreaux-20x40",
        image: "2D9901.jpeg",
        disponible: true
    }, {
        id: "P22132",
        category: "carreaux-20x40",
        image: "P22132.jpeg",
        disponible: true
    },
    // {
    //     id: "W24017",
    //     category: "carreaux-20x40",
    //     image: "",
    //     disponible: true
    // }, {
    //     id: "W24022",
    //     category: "carreaux-20x40",
    //     image: "",
    //     disponible: true
    // }, 
    {
        id: "W24032C",
        category: "carreaux-20x40",
        image: "W24032.jpeg",
        disponible: true
    }, {
        id: "W24048",
        category: "carreaux-20x40",
        image: "W24048.jpeg",
        disponible: true
    },
    // {
    //     id: "W24056",
    //     category: "carreaux-20x40",
    //     image: "",
    //     disponible: true
    // },

    /* ── carreaux-25x40 ── */

    {
        id: "PMCP 4117C",
        category: "carreaux-25x40",
        image: "PMCP_4117.jpeg",
        disponible: true
    }, {
        id: "PMCP 42001C",
        category: "carreaux-25x40",
        image: "PMCP_42001.jpeg",
        disponible: true
    }, {
        id: "PMCP 42003",
        category: "carreaux-25x40",
        image: "PMCP_42003.jpeg",
        disponible: true
    }, {
        id: "PMCP 42005",
        category: "carreaux-25x40",
        image: "PMCP_42005.jpeg",
        disponible: true
    }, {
        id: "PMCP 42006",
        category: "carreaux-25x40",
        image: "PMCP_42006.jpeg",
        disponible: true
    }, {
        id: "PMCP 42012C",
        category: "carreaux-25x40",
        image: "PMCP_42012.jpeg",
        disponible: true
    },

    {
        id: "PMCP 42018",
        category: "carreaux-25x40",
        image: "PMCP_42018.jpeg",
        disponible: true
    }, {
        id: "PMCP 42019C",
        category: "carreaux-25x40",
        image: "PMCP_42019.jpeg",
        disponible: true
    },

    {
        id: "PMCP 42022C",
        category: "carreaux-25x40",
        image: "PMCP_42022.jpeg",
        disponible: true
    }, {
        id: "PMCP 42023C",
        category: "carreaux-25x40",
        image: "PMCP_42023.jpeg",
        disponible: true
    },

    {
        id: "PMCP 42026",
        category: "carreaux-25x40",
        image: "PMCP_42026.jpeg",
        disponible: true
    }, {
        id: "PMCP 42027C",
        category: "carreaux-25x40",
        image: "PMCP_42027.jpeg",
        disponible: true
    }, {
        id: "PMCP 42029C",
        category: "carreaux-25x40",
        image: "PMCP_42029.jpeg",
        disponible: true
    },

    {
        id: "PMCP 42032",
        category: "carreaux-25x40",
        image: "PMCP_42032.jpeg",
        disponible: true
    },

    {
        id: "PMCP 42035C",
        category: "carreaux-25x40",
        image: "PMCP_42035.jpeg",
        disponible: true
    }, {
        id: "PMCP 42037C",
        category: "carreaux-25x40",
        image: "PMCP_42037.jpeg",
        disponible: true
    },

    {
        id: "PMCP 42041C",
        category: "carreaux-25x40",
        image: "PMCP_42041.jpeg",
        disponible: true
    }, {
        id: "PMCP 42042C",
        category: "carreaux-25x40",
        image: "PMCP_42042.jpeg",
        disponible: true
    }, {
        id: "PMCP 42043C",
        category: "carreaux-25x40",
        image: "PMCP_42043.jpeg",
        disponible: true
    }, {
        id: "PMCP 42044",
        category: "carreaux-25x40",
        image: "PMCP_42044.jpeg",
        disponible: true
    }, {
        id: "PMCP 42047C",
        category: "carreaux-25x40",
        image: "PMCP_42047.jpeg",
        disponible: true
    }, {
        id: "PMCP 42049",
        category: "carreaux-25x40",
        image: "PMCP_42049.jpeg",
        disponible: true
    },

    {
        id: "PMCP 42053C",
        category: "carreaux-25x40",
        image: "PMCP_42053.jpeg",
        disponible: true
    }, {
        id: "PMCP 42054C",
        category: "carreaux-25x40",
        image: "PMCP_42054.jpeg",
        disponible: true
    }, {
        id: "PMCP 42055C",
        category: "carreaux-25x40",
        image: "PMCP_42055.jpeg",
        disponible: true
    }, {
        id: "PMCP 42059",
        category: "carreaux-25x40",
        image: "PMCP_42059.jpeg",
        disponible: true
    }, {
        id: "PMCP 42060",
        category: "carreaux-25x40",
        image: "PMCP_42060.jpeg",
        disponible: true
    },

    {
        id: "PMCP 42064",
        category: "carreaux-25x40",
        image: "PMCP_42064.jpeg",
        disponible: true
    }, {
        id: "PMCP 42065",
        category: "carreaux-25x40",
        image: "PMCP_42065.jpeg",
        disponible: true
    },

    {
        id: "PMCP 42067",
        category: "carreaux-25x40",
        image: "PMCP_42067.jpeg",
        disponible: true
    },

    {
        id: "PMCP 42069",
        category: "carreaux-25x40",
        image: "PMCP_42069.jpeg",
        disponible: true
    }, {
        id: "PMCP 42070",
        category: "carreaux-25x40",
        image: "PMCP_42070.jpeg",
        disponible: true
    },

    {
        id: "PMCP 42072",
        category: "carreaux-25x40",
        image: "PMCP_42072.jpeg",
        disponible: true
    }, {
        id: "PMCP 42073",
        category: "carreaux-25x40",
        image: "PMCP_42073.jpeg",
        disponible: true
    }, {
        id: "PMCP 42074",
        category: "carreaux-25x40",
        image: "PMCP_42074.jpeg",
        disponible: true
    }, {
        id: "PMCP 42075",
        category: "carreaux-25x40",
        image: "PMCP_42075.jpeg",
        disponible: true
    }, {
        id: "PMCP 42076",
        category: "carreaux-25x40",
        image: "PMCP_42076.jpeg",
        disponible: true
    }, {
        id: "PMCP 42078",
        category: "carreaux-25x40",
        image: "PMCP_42078.jpeg",
        disponible: true
    }, {
        id: "PMCP 42079",
        category: "carreaux-25x40",
        image: "PMCP_42079.jpeg",
        disponible: true
    }, {
        id: "PMCP 42080",
        category: "carreaux-25x40",
        image: "PMCP_42080.jpeg",
        disponible: true
    }, {
        id: "PMCP 42081",
        category: "carreaux-25x40",
        image: "PMCP_42081.jpeg",
        disponible: true
    }, {
        id: "PMCP 42082",
        category: "carreaux-25x40",
        image: "PMCP_42082.jpeg",
        disponible: true
    }, {
        id: "PMCP 42083",
        category: "carreaux-25x40",
        image: "PMCP_42083.jpeg",
        disponible: true
    },

    {
        id: "PMCP 4229G",
        category: "carreaux-25x40",
        image: "PMCP_4229.jpeg",
        disponible: true
    }, {
        id: "PMCP 4583C",
        category: "carreaux-25x40",
        image: "PMCP_4583.jpeg",
        disponible: true
    },

    {
        id: "PMCP 4639",
        category: "carreaux-25x40",
        image: "PMCP_4639.jpeg",
        disponible: true
    },

    /* ── carreaux-30x30 ── */
    {
        id: "FGP 33001",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33007C",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33008C",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33010",
        category: "carreaux-30x30",
        image: "",
        disponible: false
    }, // hidden
    {
        id: "FGP 33014",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33015",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33021",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33022",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33023",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33024",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33025",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33026",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33027",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33028",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33029",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33030",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33032",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33034",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33035",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33036",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33039",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33112",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33126",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33130",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "FGP 33132",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NM 33001C",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NM 33003C",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NM 33005",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NM 33021",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NM 33041C",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NM 33091C",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NM 33101C",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NM 33171",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NM 33225",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NM 33233",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NM 33281",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NMC 33005",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NMC 33095",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NMC 33105",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "NMC 33225",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "YM 33031",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "YM 33064",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    }, {
        id: "YM 33191",
        category: "carreaux-30x30",
        image: "",
        disponible: true
    },

    /* ── carreaux-30x60 ── */
    {
        id: "Carreau Grand 30x60",
        category: "carreaux-30x60",
        image: "",
        disponible: true
    },

    /* ── carreaux-40x40 ── */
    {
        id: "Carreau 40x40",
        category: "carreaux-40x40",
        image: "",
        disponible: true
    },

    /* ── carreaux-50x50 ── */
    {
        id: "Carreau 50x50",
        category: "carreaux-50x50",
        image: "",
        disponible: true
    },

    /* ── carreaux-60x60 ── */
    {
        id: "Carreau 60x60",
        category: "carreaux-60x60",
        image: "",
        disponible: true
    },

    /* ── carreaux-60x120 ── */
    {
        id: "Carreau Rectangulaire 60x120",
        category: "carreaux-60x120",
        image: "",
        disponible: true
    },

    /* ── tole ── */
    {
        id: "Tôle ondulé",
        category: "tole",
        image: "Tole_ondulee.JPG",
        disponible: true
    }, {
        id: "Tôle Acier",
        category: "tole",
        image: "",
        disponible: false
    }, // hidden

    /* ── accessoire ── */
    {
        id: "Joint Silicone",
        category: "accessoire",
        image: "",
        disponible: true
    }, {
        id: "Croix Espacement",
        category: "accessoire",
        image: "",
        disponible: true
    },

    /* ── ciment-colle ── */
    {
        id: "Ciment Colle Blanc",
        category: "ciment-colle",
        image: "",
        disponible: true
    }, {
        id: "Colle Époxy",
        category: "ciment-colle",
        image: "",
        disponible: false
    } // hidden
];