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
        { category: 'carreaux-30x30', name: 'FGP 33001', description: 'Carreau 30x30 FGP 33001', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33007C', description: 'Carreau 30x30 FGP 33007C', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33008C', description: 'Carreau 30x30 FGP 33008C', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33010', description: 'Carreau 30x30 FGP 33010', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33014', description: 'Carreau 30x30 FGP 33014', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33015', description: 'Carreau 30x30 FGP 33015', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33021', description: 'Carreau 30x30 FGP 33021', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33022', description: 'Carreau 30x30 FGP 33022', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33023', description: 'Carreau 30x30 FGP 33023', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33024', description: 'Carreau 30x30 FGP 33024', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33025', description: 'Carreau 30x30 FGP 33025', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33026', description: 'Carreau 30x30 FGP 33026', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33027', description: 'Carreau 30x30 FGP 33027', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33028', description: 'Carreau 30x30 FGP 33028', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33029', description: 'Carreau 30x30 FGP 33029', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33030', description: 'Carreau 30x30 FGP 33030', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33032', description: 'Carreau 30x30 FGP 33032', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33034', description: 'Carreau 30x30 FGP 33034', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33035', description: 'Carreau 30x30 FGP 33035', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33036', description: 'Carreau 30x30 FGP 33036', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33039', description: 'Carreau 30x30 FGP 33039', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33112', description: 'Carreau 30x30 FGP 33112', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33126', description: 'Carreau 30x30 FGP 33126', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33130', description: 'Carreau 30x30 FGP 33130', image: '' },
        { category: 'carreaux-30x30', name: 'FGP 33132', description: 'Carreau 30x30 FGP 33132', image: '' },
        /* ==================== CARREAUX 30x30 NM ==================== */
        { category: 'carreaux-30x30', name: 'NM 33001C', description: 'Carreau 30x30 NM 33001C', image: '' },
        { category: 'carreaux-30x30', name: 'NM 33003C', description: 'Carreau 30x30 NM 33003C', image: '' },
        { category: 'carreaux-30x30', name: 'NM 33005', description: 'Carreau 30x30 NM 33005', image: '' },
        { category: 'carreaux-30x30', name: 'NM 33021', description: 'Carreau 30x30 NM 33021', image: '' },
        { category: 'carreaux-30x30', name: 'NM 33041C', description: 'Carreau 30x30 NM 33041C', image: '' },
        { category: 'carreaux-30x30', name: 'NM 33091C', description: 'Carreau 30x30 NM 33091C', image: '' },
        { category: 'carreaux-30x30', name: 'NM 33101C', description: 'Carreau 30x30 NM 33101C', image: '' },
        { category: 'carreaux-30x30', name: 'NM 33171', description: 'Carreau 30x30 NM 33171', image: '' },
        { category: 'carreaux-30x30', name: 'NM 33225', description: 'Carreau 30x30 NM 33225', image: '' },
        { category: 'carreaux-30x30', name: 'NM 33233', description: 'Carreau 30x30 NM 33281', image: '' },
        { category: 'carreaux-30x30', name: 'NM 33281', description: 'Carreau 30x30 NM 33281', image: '' },
        { category: 'carreaux-30x30', name: 'NMC 33005', description: 'Carreau 30x30 NMC 33005', image: '' },
        /* ==================== CARREAUX 30x30 NMC ==================== */
        { category: 'carreaux-30x30', name: 'NMC 33095', description: 'Carreau 30x30 NMC 33095', image: '' },
        { category: 'carreaux-30x30', name: 'NMC 33105', description: 'Carreau 30x30 NMC 33105', image: '' },
        { category: 'carreaux-30x30', name: 'NMC 33225', description: 'Carreau 30x30 NMC 33225', image: '' },

        /* ==================== CARREAUX 30x30 YM ==================== */
        { category: 'carreaux-30x30', name: 'YM 33031', description: 'Carreau 30x30 YM 33031', image: '' },
        { category: 'carreaux-30x30', name: 'YM 33064', description: 'Carreau 30x30 YM 33064', image: '' },
        { category: 'carreaux-30x30', name: 'YM 33191', description: 'Carreau 30x30 YM 33191', image: '' },



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