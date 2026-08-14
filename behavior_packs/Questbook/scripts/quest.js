import {
    system
} from "@minecraft/server";

import {
    world,
    Items
} from '@minecraft/server'

import {
    ActionFormData,
    ModalFormData
} from '@minecraft/server-ui'

system.events.beforeWatchdogTerminate.subscribe(e => {
    e.cancel = true
    console.warn(e.terminateReason)
})

let title = ["Craft a Sieve", "Leaves Collector", "Making Water", "Pebbles", "Smashing Stones", "Diamonds", "POWER", "Faster Sieve", "Making Lava", "Cobblestone Generator", "Fully Automatic Resources", "Void Mining", "Ore Doubling", "Soul Sand Sieve", "The End", "Cobblestone Sapling", "Coal Sapling", "Iron Sapling", "Gold Sapling", "Redstone Sapling", "Lapis Sapling", "Diamond Sapling", "Emerald Sapling", "Quartz Sapling", "Cogs", "Manual Labor", "Mechanical Cobblestone", "Crushing Wheel", "Mechanical Sieve", "Power Cables", "Quantum Mining", "Plastic Refining", "Silicon Factorizing", "Circuits", "Infinite Experience", "Cobblestone Compressor", "Crafting Bedrock", "Bedrockium Sword", "Custom Enchanting", "ME System", "Storage Export Bus", "Storage Import Bust"]
let items = ["vatonage:spawn_sieve", "minecraft:shears", "vatonage:spawn_wooden_barrel", "vatonage:pebble", "vatonage:wood_hammer", "vatonage:diamond_nugget", "vatonage:power_core_spawn_egg", "vatonage:spawn_auto_sieve", "vatonage:spawn_stone_barrel", "vatonage:spawn_cobblestone_generator", "vatonage:spawn_crusher", "vatonage:spawn_void_miner", "vatonage:spawn_mechanical_furnace", "vatonage:spawn_matter_converter", "vatonage:spawn_endcake", "vatonage:spawn_cobblestone_sapling", "vatonage:spawn_coal_sapling", "vatonage:spawn_iron_sapling", "vatonage:spawn_gold_sapling", "vatonage:spawn_redstone_sapling", "vatonage:spawn_lapis_sapling", "vatonage:spawn_diamond_sapling", "vatonage:spawn_emerald_sapling", "vatonage:spawn_quartz_sapling", "vatonage:cogwheel", "vatonage:mechanical_crank", "vatonage:mechanical_cobblestone_generator", "vatonage:crushing_wheel", "vatonage:mechanical_sieve", "vatonage:power_cable", "vatonage:quantum_miner", "vatonage:plastic", "vatonage:silicon", "vatonage:circuit_board", "vatonage:imexp_generator", "vatonage:cobblestone_compressor", "vatonage:bedrockium", "vatonage:bedrockium_sword", "vatonage:custom_enchantment_table", "astoragenet:storage_terminal", "astoragenet:terminal_import_bus", "astoragenet:terminal_export_bus"]
let addonname = ["§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§4Advanced Machinery", "§aOre Trees", "§aOre Trees", "§aOre Trees", "§aOre Trees", "§aOre Trees", "§aOre Trees", "§aOre Trees", "§aOre Trees", "§aOre Trees", "§6Create", "§6Create", "§6Create", "§6Create", "§6Create", "§1Basic Machinery", "§1Basic Machinery", "§1Basic Machinery", "§1Basic Machinery", "§1Basic Machinery", "§1Basic Machinery", "§0Bedrockium", "§0Bedrockium", "§0Bedrockium", "§5Custom Enchanting", "§9Advanced Storage Network", "§9Advanced Storage Network", "§9Advanced Storage Network"]
let edescriptions = ["Craft a Sieve using some sticks and planks", "Craft a crook/shears to collect leaves", "Craft a Wooden Barrel and put leaves in it to generate water", "Collect pebbles by crafting dirt with leaves and putting the dirt into a sieve", "Craft a Wood Hammer and use it to break cobblestone to make gravel and break gravel to make sand, MAKE SURE YOU SET YOUR MINECRAFT GAME LANGUAGE TO ENGLISH FOR THIS TO WORK!", "Put gravel in the sieve and you have a chance to get a diamond nugget, putting sand in the sieve has a higher chance to give diamonds", "Craft a Power Core and place it down. This machine will collect power from generators in a 30 block radius and will use it to power machines in a 30 block radius", "Craft an Auto Sieve to instantly sieve items ontop of it or from your hand. Place it within 30 blocks of the power core and give the power core RF from the solar generator", "Craft a Stone Barrel and put cobblestone in it to generate lava", "Craft a Cobblestone Generator to automatically produce cobblestone. You can put this cobblestone into a chest by using conveyors and a hopper", "Craft a crusher to fully automate your auto sieve. Have conveyors go from the cobblestone generator, to the crusher, then to the auto sieve, and then use hoppers to put it all in a chest", "Craft a Void Miner, this machine will create random ores if it has enough power", "The mechanical furnace will double the ores into ingots whenever an ore is above the machine", "Use the Matter Converter to turn sand into soul sand, then sieve the soul sand for nether resources", "Take a slice of the end cake to teleport to The End", "Craft a Cobblestone Sapling", "Craft a Coal Sapling", "Craft an Iron Sapling", "Craft a Gold Sapling", "Craft a Redstone Sapling", "Craft a Lapis Sapling", "Craft a Diamond Sapling", "Craft a Emerald Sapling", "Craft a Quartz Sapling", "Craft a Cogwheel, this machine is used to power all the machines in the create addon and must be hooked up between all machines", "The Manual Crank will spin all connected gears when it is interacted with", "This machine will place a cobblestone block below it when a connected gear is activated", "This machine will turn a cobblestone block above it into gravel and a gravel block into sand below it whenever a connected cogwheel is activated", "The Mechanical Sieve will turn sand or gravel blocks above it into resources like iron when it is activated by a cogwheel", "Craft a Power Cable, they can be used to connect machines together and transfer power", "Craft a Quantum Miner and use power cables to connect it to a solar panel. This machine will produce ores every time it is powered", "To create plastic get an oil rig, power it, then use fluid cables to send the oil to a Plastic Refinery, make sure that is powered too", "To create silicon you need to generate carbon gas by putting oil into a Fluid Seperator, put that into a Silicon Factory along with water and lava from a fluid pump, and put advanced power in the factory by using a Power Upgrader", "Craft a Circuit Board using plastic and silicon", "Craft an Exp Generator to generate experience fluid. Put the fluid into a Fluid Tank and place an Exp Transmitter below the fluid tank to automatically give you the exp.", "Craft a Cobblestone Compressor. This machine will collect nearby cobblestone and compress it, interact with the machine to take the cobblestone out", "Craft a Bedrockium Ingot from over 500,000 cobblestone", "Craft a Bedrockium Sword from over 1,000,000 cobblestone", "Craft a Custom Enchantment Table to add custom enchantments to your weapons", "Craft a Storage Terminal. This machine is great for holding as many items as you want", "Craft a Storage Import Bus to automatically put items into a storage system within 30 blocks, place it below a chest", "Craft a Storage Export Bus to automatically take out items from the storage system within 30 blocks. Punch the bus with an item to have it export"]
let icon = ["items/spawn_sieve", "items/shears", "items/spawn_wooden_barrel", "items/pebble", "items/wood_hammer", "items/diamond_nugget", "items/spawn_power_core", "items/spawn_auto_sieve", "items/spawn_stone_barrel", "items/spawn_cobblestone_generator", "items/spawn_crusher", "items/spawn_void_miner", "items/spawn_mechanical_furnace", "items/spawn_matter_converter", "items/spawn_endcake", "items/spawn_cobblestone_sapling", "items/spawn_coal_sapling", "items/spawn_iron_sapling", "items/spawn_gold_sapling", "items/spawn_redstone_sapling", "items/spawn_lapis_sapling", "items/spawn_diamond_sapling", "items/spawn_emerald_sapling", "items/spawn_quartz_sapling", "items/create_icon", "items/create_icon", "items/create_icon", "items/create_icon", "items/create_icon", "items/basic_icon", "items/basic_icon", "items/implastic", "items/imsilicon", "items/imcircuit_board", "items/basic_icon", "items/bedrockium", "items/bedrockium", "items/bedrockium_sword", "blocks/enchanting_table_top", "blocks/storage_terminal", "blocks/terminal_import_bus", "blocks/terminal_export_bus"]
let rewards = [
    ["minecraft:log", 5],
    ["minecraft:dirt", 3],
    ["minecraft:bucket", 1],
    ["minecraft:cobblestone", 5],
    ["minecraft:gravel", 5],
    ["minecraft:iron_ingot", 3],
    ["vatonage:solar_generator", 1],
    ["minecraft:gravel", 32],
    ["minecraft:bucket", 3],
    ["vatonage:advanced_solar_generator", 1],
    ["vatonage:conveyor", 12],
    ["minecraft:diamond", 5],
    ["vatonage:lava_generator", 1],
    ["minecraft:iron_ingot", 16],
    ["minecraft:diamond", 16],
    ["minecraft:dirt", 4],
    ["minecraft:cobblestone", 16],
    ["minecraft:coal", 16],
    ["minecraft:iron_ingot", 16],
    ["minecraft:gold_ingot", 16],
    ["minecraft:redstone", 64],
    ["minecraft:lapis_lazuli", 64],
    ["minecraft:diamond", 16],
    ["minecraft:emerald", 16],
    ["minecraft:cobblestone", 4],
    ["minecraft:iron_ingot", 2],
    ["minecraft:cobblestone", 32],
    ["minecraft:gravel", 32],
    ["minecraft:sand", 16],
    ["vatonage:solar_panel", 1],
    ["vatonage:imsteam_generator", 1],
    ["minecraft:diamond", 12],
    ["vatonage:plastic_bunch", 16],
    ["vatonage:solar_panel", 6],
    ["vatonage:geothermal_generator", 1],
    ["vatonage:quintuple_compressed_cobblestone", 1],
    ["minecraft:diamond_block", 8],
    ["minecraft:diamond_block", 64],
    ["minecraft:netherite_sword", 1],
    ["minecraft:netherite_ingot", 1],
    ["minecraft:iron_block", 4],
    ["minecraft:iron_block", 8]
]
let indescriptions = ["Buat Saringan menggunakan beberapa tongkat dan papan", "Buat lekukan/gunting untuk mengumpulkan daun", "Buat Tong Kayu dan masukkan daun ke dalamnya untuk menghasilkan air", "Kumpulkan kerikil dengan membuat kotoran dengan daun dan memasukkan kotoran ke dalamnya saringan", "Buat Palu Kayu dan gunakan untuk memecahkan batu bulat untuk membuat kerikil dan pecahkan kerikil untuk membuat pasir, PASTIKAN ANDA MENGATUR BAHASA GAME MINECRAFT ANDA KE BAHASA INGGRIS AGAR INI BEKERJA!", "Masukkan kerikil ke dalam saringan dan Anda memiliki peluang untuk mendapatkan nugget berlian, memasukkan pasir ke dalam saringan memiliki peluang lebih tinggi untuk memberikan berlian", "Membuat Power Core dan meletakkannya. Mesin ini akan mengumpulkan daya dari generator dalam radius 30 blok dan akan menggunakannya untuk mesin listrik dalam radius 30 blok", "Buat Saringan Otomatis untuk langsung mengayak item di atasnya atau dari tangan Anda. Tempatkan dalam 30 blok dari inti daya dan berikan inti daya RF dari generator surya", "Buat a Batu Barrel dan letakkan batu bulat di dalamnya untuk menghasilkan lava", "Buat Generator Batu Bulat untuk secara otomatis menghasilkan e batu bulat. Anda dapat memasukkan batu bulat ini ke dalam peti dengan menggunakan konveyor dan hopper", "Buat penghancur untuk mengotomatiskan saringan otomatis Anda sepenuhnya. Suruh konveyor pergi dari generator batu bulat, ke penghancur, lalu ke saringan otomatis, dan kemudian gunakan hopper untuk meletakkan semuanya di peti", "Buat Penambang Void, mesin ini akan membuat bijih acak jika memiliki daya yang cukup", "Tungku mekanis akan menggandakan bijih menjadi ingot setiap kali bijih berada di atas mesin", "Gunakan Pengonversi Materi untuk mengubah pasir menjadi pasir jiwa, lalu saring pasir jiwa untuk sumber daya selanjutnya", "Ambil sepotong kue akhir untuk teleport ke Akhir", "Membuat Anakan Batu Bulat", "Membuat Anakan Batubara", "Membuat Anakan Besi", "Membuat Anakan Emas", "Membuat Anakan Batu Merah", "Membuat Anakan Lapis", "Kerajinan a Diamond Sapling", "Craft a Emerald Sapling", "Craft a Quartz Sapling", "Craft a Cogwheel, mesin ini digunakan untuk memberi daya pada semua mesin di addon pembuatan dan harus dihubungkan di antara semua mesin", "Manual Engkol akan memutar semua roda gigi yang terhubung saat berinteraksi dengan", "Mesin ini akan menempatkan blok batu bulat di bawahnya saat roda gigi yang terhubung diaktifkan", "Ini mesin akan mengubah blok batu bulat di atasnya menjadi kerikil dan blok kerikil menjadi pasir di bawahnya setiap kali roda gigi yang terhubung diaktifkan", "Saringan Mekanik akan mengubah pasir atau blok kerikil di atasnya menjadi sumber daya seperti besi ketika diaktifkan oleh roda gigi", "Buat Kabel Daya, mereka dapat digunakan untuk menghubungkan mesin bersama-sama dan mentransfer daya", "Membuat Quantum Miner dan menggunakan kabel daya untuk menghubungkannya ke panel surya. Mesin ini akan menghasilkan bijih setiap kali diberi daya", "Untuk membuat plastik, dapatkan rig minyak, nyalakan, lalu gunakan kabel fluida untuk mengirim minyak ke Kilang Plastik, pastikan itu juga bertenaga", "Untuk membuat silikon Anda perlu menghasilkan gas karbon dengan memasukkan minyak ke dalam Pemisah Cairan, memasukkannya ke dalam Pabrik Silikon bersama dengan air dan lava dari pompa fluida, dan menempatkan daya tingkat lanjut di pabrik dengan menggunakan Power Upgrader", "Membuat Papan Sirkuit menggunakan plastik dan silikon", "Buat Generator Exp untuk menghasilkan cairan pengalaman. Masukkan cairan ke dalam Tangki Cairan dan tempatkan Pemancar Exp di bawah tangki cairan untuk memberi Anda exp secara otomatis.", "Buat Kompresor Batu Bulat. Mesin ini akan mengumpulkan batu bulat di dekatnya dan mengompresnya, berinteraksi dengan mesin untuk mengeluarkan batu bulat itu", "Membuat Ingot Bedrockium dari lebih dari 500.000 batu bulat", "Membuat Pedang Bedrockium dari lebih dari 1.000.000 batu bulat", "Membuat Meja Pesona Khusus untuk tambahkan pesona khusus ke senjata Anda", "Buat Terminal Penyimpanan. Mesin ini sangat bagus untuk menyimpan barang sebanyak yang Anda inginkan", "Buat Bus Impor Penyimpanan untuk secara otomatis memasukkan barang ke dalam sistem penyimpanan dalam jarak 30 blok, letakkan di bawah peti", "Buat Bus Ekspor Penyimpanan untuk mengambil barang secara otomatis dari sistem penyimpanan dalam 30 blok. Pukul bus dengan item untuk mengekspornya"]
let podescriptions = ["Faça uma peneira usando alguns gravetos e tábuas", "Faça um cajado/tesoura para coletar folhas", "Faça um barril de madeira e coloque folhas nele para gerar água", "Colecione pedrinhas criando terra com folhas e colocando a terra em uma peneira", "Faça um martelo de madeira e use-o para quebrar paralelepípedos para fazer cascalho e quebrar cascalho para fazer areia, CERTIFIQUE-SE DE DEFINIR A IDIOMA DO JOGO DE MINECRAFT PARA INGLÊS PARA ISSO FUNCIONAR!", "Coloque cascalho na peneira e você ter uma chance de obter uma pepita de diamante, colocar areia na peneira tem uma chance maior de dar diamantes", "Faça um Núcleo de Energia e coloque-o no chão. Esta máquina coletará energia de geradores em um raio de 30 quarteirões e o usará para máquinas de energia em um raio de 30 quarteirões", "Faça uma peneira automática para peneirar instantaneamente itens em cima dela ou da sua mão. Coloque-a a 30 quarteirões do núcleo de força e dê ao núcleo de força RF do gerador solar", "Faça uma Stone Barrel e coloque paralelepípedos nele para gerar lava", "Faça um Gerador de Cobblestone para produzir automaticamente e paralelepípedo. Você pode colocar este paralelepípedo em um baú usando transportadores e uma tremonha", "Crie um triturador para automatizar totalmente sua peneira automática. Faça os transportadores irem do gerador de paralelepípedos, para o triturador, depois para a peneira automática e, em seguida, use tremonhas para colocar tudo em um baú", "Faça um Minerador do Vazio, esta máquina criará minérios aleatórios se tiver energia suficiente", "A fornalha mecânica dobrará os minérios em lingotes sempre que um minério estiver acima da máquina", "Use o Conversor de Matéria para transformar areia em areia das almas, depois peneire a areia das almas para obter recursos inferiores", "Pegue uma fatia do bolo final para teletransportar-se para o Fim", "Criar uma muda de pedregulho", "Fazer uma muda de carvão", "Fazer uma muda de ferro", "Fazer uma muda de ouro", "Fazer uma muda de pedra vermelha", "Fazer uma muda de lápis-lazúli", "Produzir uma muda de diamante", "Faça uma muda de esmeralda", "Faça uma muda de quartzo", "Faça uma roda dentada, esta máquina é usada para alimentar todas as máquinas no complemento de criação e deve ser conectada entre todas as máquinas", "O Manual A manivela irá girar todas as engrenagens conectadas quando interagir com ela", "Esta máquina colocará um bloco de paralelepípedos abaixo dela quando uma engrenagem conectada for ativada", "Esta máquina máquina transformará um bloco de paralelepípedos acima dele em cascalho e um bloco de cascalho em areia abaixo dele sempre que uma roda dentada conectada for ativada", "A peneira mecânica transformará blocos de areia ou cascalho acima dele em recursos como ferro quando ativado por uma roda dentada", "Faça um cabo de alimentação, eles podem ser usados ​​para conectar máquinas e transferir energia", "Faça um Quantum Miner e use cabos de alimentação para conectá-lo a um painel solar. Esta máquina produzirá minérios toda vez que for alimentada", "Para criar plástico, pegue uma plataforma de petróleo, alimente-a e use cabos de fluido para enviar o petróleo para uma refinaria de plástico, certifique-se de que também seja alimentada", "Para criar silício, você precisa gerar gás carbônico colocando óleo em um Separador de Fluidos, colocar isso em uma Fábrica de Silício junto com água e lava de uma bomba de fluido e colocar energia avançada na fábrica usando um Power Upgrader", "Criar uma Placa de Circuito usando plástico e silicone", "Crie um Gerador de Exp para gerar fluido de experiência. Coloque o fluido em um Tanque de Fluido e coloque um Transmissor de Exp abaixo do tanque de fluido para dar automaticamente a exp.", "Faça um Compressor de Cobblestone. Esta máquina irá coletar paralelepípedos próximos e comprimi-lo, interagir com a máquina para remover o paralelepípedo", "Criar um lingote de Bedrockium de mais de 500.000 paralelepípedos", "Criar uma Espada de Bedrockium de mais de 1.000.000 de paralelepípedos", "Criar uma mesa de encantamento personalizada para adicione encantamentos personalizados às suas armas", "Crie um Terminal de Armazenamento. Esta máquina é ótima para guardar quantos itens você quiser", "Crie um Storage Import Bus para colocar itens automaticamente em um sistema de armazenamento dentro de 30 blocos, coloque-o abaixo de um baú", "Crie um Storage Export Bus para retirar itens automaticamente do sistema de armazenamento dentro de 30 blocos. Dê um soco no ônibus com um item para exportá-lo"]
let fidescriptions = ["Gumawa ng Salaan gamit ang ilang mga patpat at tabla", "Gumawa ng isang manloloko/gupit para mangolekta ng mga dahon", "Gumawa ng Wooden Barrel at maglagay ng mga dahon dito upang makabuo ng tubig", "Mangolekta ng mga pebbles sa pamamagitan ng paggawa ng dumi gamit ang mga dahon at paglalagay ng dumi sa isang salaan", "Gumawa ng Wood Hammer at gamitin ito para masira ang cobblestone para gumawa ng graba at masira ang graba para makagawa ng buhangin, SIGURADUHIN MO I-SET ANG IYONG MINECRAFT GAME LANGUAGE SA INGLES PARA ITO GUMAGANA!", "Ilagay ang graba sa salaan at ikaw magkaroon ng pagkakataong makakuha ng diamond nugget, ang paglalagay ng buhangin sa salaan ay may mas mataas na pagkakataong magbigay ng mga diamante", "Gumawa ng Power Core at ilagay ito pababa. Ang makinang ito ay mangongolekta ng kuryente mula sa mga generator sa 30 block radius at gagamitin ito upang mga power machine sa 30 block radius", "Gumawa ng Auto Sieve upang agad na salain ang mga item sa ibabaw nito o mula sa iyong kamay. Ilagay ito sa loob ng 30 bloke ng power core at bigyan ang power core na RF mula sa solar generator", "Craft a Stone Barrel at ilagay ang cobblestone dito para makabuo ng lava", "Gumawa ng Cobblestone Generator para awtomatikong makagawa e cobblestone. Maaari mong ilagay ang cobblestone na ito sa isang dibdib sa pamamagitan ng paggamit ng mga conveyor at hopper", "Gumawa ng pandurog upang ganap na i-automate ang iyong auto sieve. Papuntahin ang mga conveyor mula sa generator ng cobblestone, patungo sa crusher, pagkatapos ay sa auto sieve, at pagkatapos ay gumamit ng mga hopper upang ilagay ang lahat sa isang dibdib", "Gumawa ng Void Miner, ang makinang ito ay lilikha ng mga random na ores kung ito ay may sapat na kapangyarihan", "Ang mechanical furnace ay magdodoble ng mga ores sa mga ingot kapag ang isang ore ay nasa itaas ng makina", "Gamitin ang Matter Converter para gawing soul sand ang buhangin, pagkatapos ay salain ang soul sand para sa nether resources", "Kumuha ng isang slice ng end cake upang teleport sa The End", "Gumawa ng Cobblestone Sapling", "Craft a Coal Sapling", "Craft an Iron Sapling", "Craft a Gold Sapling", "Craft a Redstone Sapling", "Craft a Lapis Sapling", "Craft isang Diamond Sapling", "Craft a Emerald Sapling", "Craft a Quartz Sapling", "Craft a Cogwheel, ang makinang ito ay ginagamit upang paganahin ang lahat ng machine sa create addon at dapat na naka-hook up sa pagitan ng lahat ng machine", "The Manual Iikot ng crank ang lahat ng konektadong gear kapag nakipag-ugnayan ito sa", "Ang makinang ito ay maglalagay ng cobblestone block sa ibaba nito kapag ang isang konektadong gear ay na-activate", "Ito gagawing graba ng makina ang isang bloke ng bato sa itaas nito at ang isang bloke ng graba ay magiging buhangin sa ibaba nito kapag ang isang konektadong cogwheel ay isinaaktibo", "Gagawin ng Mechanical Sieve ang mga bloke ng buhangin o graba sa itaas nito bilang mga mapagkukunan tulad ng bakal kapag na-activate ito ng isang cogwheel", "Gumawa ng Power Cable, magagamit ang mga ito para ikonekta ang mga makina at ilipat ang kapangyarihan", "Gumawa ng Quantum Miner at gumamit ng mga power cable para ikonekta ito sa isang solar panel. Ang makinang ito ay gagawa ng mga ores sa tuwing ito ay pinapagana", "Upang gumawa ng plastic kumuha ng oil rig, paandarin ito, pagkatapos ay gumamit ng mga fluid cable upang ipadala ang langis sa isang Plastic Refinery, siguraduhing ito ay pinapagana din", "Para lumikha ng silicon kailangang makabuo ng carbon gas sa pamamagitan ng paglalagay ng langis sa isang Fluid Seperator, ilagay iyon sa isang Silicon Factory kasama ng tubig at lava mula sa isang fluid pump, at maglagay ng advanced power sa factory sa pamamagitan ng paggamit ng Power Upgrader", "Gumawa ng Circuit Board gamit ang plastic at silicon", "Gumawa ng Exp Generator para makabuo ng tuluy-tuloy na karanasan. Ilagay ang fluid sa isang Fluid Tank at maglagay ng Exp Transmitter sa ibaba ng fluid tank para awtomatikong maibigay sa iyo ang exp.", "Gumawa ng Cobblestone Compressor. Mangongolekta ang makinang ito ng kalapit na cobblestone at i-compress ito, makikipag-ugnayan sa makina para alisin ang cobblestone", "Gumawa ng Bedrockium Ingot mula sa mahigit 500,000 cobblestone", "Gumawa ng Bedrockium Sword mula sa mahigit 1,000,000 cobblestone", "Gumawa ng Custom Enchantment Table to magdagdag ng mga custom na enchantment sa iyong mga armas", "Gumawa ng Storage Terminal. Ang makinang ito ay mahusay para sa paghawak ng maraming item hangga't gusto mo", "Gumawa ng Storage Import Bus upang awtomatikong ilagay ang mga item sa isang storage system sa loob ng 30 bloke, ilagay ito sa ibaba ng dibdib", "Gumawa ng Storage Export Bus para awtomatikong kumuha ng mga item mula sa sistema ng imbakan sa loob ng 30 bloke. Suntukin ang bus ng isang item para ma-export ito"]
let videscriptions = ["Tạo một cái sàng bằng cách sử dụng một số que và tấm ván", "Làm một kẻ gian / kéo để thu thập lá", "Làm một thùng gỗ và đặt lá vào đó để tạo ra nước", "Thu thập đá cuội bằng cách chế tạo bụi bẩn bằng lá và cho chất bẩn vào một cái sàng ", " Chế tạo một cái Búa gỗ và dùng nó để phá đá cuội để tạo sỏi và phá sỏi để làm cát. ĐẢM BẢO BẠN ĐẶT NGÔN NGỮ TRÒ CHƠI MINECRAFT TIẾNG ANH ĐỂ LÀM VIỆC NÀY! ", " Bỏ sỏi vào sàng rồi bạn có cơ hội nhận được hạt kim cương, bỏ cát vào sàng có cơ hội kiếm được kim cương cao hơn ", " Chế tạo Lõi điện và đặt nó xuống. Máy này sẽ thu năng lượng từ các máy phát điện trong bán kính 30 khối và sẽ sử dụng nó để máy điện trong bán kính 30 khối ", " Chế tạo Sàng tự động để sàng ngay lập tức các vật phẩm trên nó hoặc từ tay bạn. Đặt nó trong phạm vi 30 khối cách lõi nguồn và cung cấp cho lõi nguồn RF từ máy phát năng lượng mặt trời ", " Chế tạo một Stone Barrel và đặt đá cuội vào đó để tạo ra dung nham ", " Chế tạo Máy tạo đá cuội để tự động sản xuất e đá cuội. Bạn có thể cho đá cuội này vào rương bằng cách sử dụng băng tải và phễu ", " Chế tạo máy nghiền để tự động hóa hoàn toàn sàng tự động của bạn. Yêu cầu các băng tải đi từ máy phát đá cuội, đến máy nghiền, sau đó đến sàng tự động, rồi dùng phễu để bỏ tất cả vào một cái rương ", " Chế tạo một thợ mỏ Void, máy này sẽ tạo ra quặng ngẫu nhiên nếu nó có đủ năng lượng ", "Lò cơ khí sẽ nhân đôi quặng thành thỏi bất cứ khi nào có quặng ở trên máy", "Sử dụng Bộ chuyển đổi vật chất để biến cát thành cát linh hồn, sau đó sàng cát linh hồn để lấy tài nguyên khác", "Lấy một lát bánh cuối để dịch chuyển đến The End ", " Craft a Cobblestone Sapling ", " Craft a stone Sapling ", " Craft a Iron Sapling ", " Craft a Gold Sapling ", " Craft a Redstone Sapling ", " Craft a Lapis Sapling ", " Craft a Diamond Sapling ", " Craft a Emerald Sapling ", " Craft a Quartz Sapling ", " Craft a Cogwheel, máy này được sử dụng để cung cấp năng lượng cho tất cả các máy trong addon tạo và phải được kết nối giữa tất cả các máy ", " Hướng dẫn sử dụng Crank sẽ quay tất cả các bánh răng được kết nối khi nó được tương tác với ", " Máy này sẽ đặt một khối đá cuội bên dưới nó khi một bánh răng được kết nối được kích hoạt ", " Cái này máy sẽ biến một khối đá cuội phía trên nó thành sỏi và một khối sỏi thành cát bên dưới nó bất cứ khi nào một bánh răng kết nối được kích hoạt ", " Máy sàng cơ học sẽ biến những khối cát hoặc sỏi phía trên nó thành tài nguyên như sắt khi nó được kích hoạt bởi một bánh răng ", "Chế tạo cáp điện, chúng có thể được sử dụng để kết nối các máy với nhau và truyền năng lượng", "Chế tạo máy khai thác lượng tử và sử dụng cáp điện để kết nối nó với bảng năng lượng mặt trời. Máy này sẽ tạo ra quặng mỗi khi nó được cung cấp năng lượng ", " Để tạo ra nhựa, hãy lấy một giàn khoan dầu, cung cấp năng lượng cho nó, sau đó sử dụng dây cáp chất lỏng để đưa dầu đến Nhà máy lọc nhựa, hãy chắc chắn rằng nó cũng được cung cấp điện ", " Để tạo ra silicon, bạn cần tạo ra khí carbon bằng cách đưa dầu vào Máy phân tách chất lỏng, đưa dầu đó vào Nhà máy Silicon cùng với nước và dung nham từ máy bơm chất lỏng và đưa năng lượng tiên tiến vào nhà máy bằng cách sử dụng Power Upgrader ", " Chế tạo bảng mạch bằng nhựa và silicon ", " Chế tạo Máy phát Exp để tạo ra chất lỏng trải nghiệm. Cho chất lỏng vào Bể chứa chất lỏng và đặt Bộ truyền Exp bên dưới thùng chất lỏng để tự động cung cấp cho bạn điểm kinh nghiệm. ", " Chế tạo Máy nén đá cuội. Máy này sẽ thu thập đá cuội gần đó và nén nó lại, tương tác với máy để lấy đá cuội ra ngoài ", " Chế tạo thỏi Bedrockium từ hơn 500.000 viên sỏi ", " Chế tạo thanh kiếm Bedrockium từ hơn 1.000.000 viên sỏi ", " Chế tạo bảng cường hóa tùy chỉnh để thêm bùa phép tùy chỉnh vào vũ khí của bạn ", " Chế tạo Trạm lưu trữ. Máy này rất tuyệt để chứa nhiều vật phẩm tùy thích ", " Tạo một Xe buýt Nhập kho để tự động đưa các vật phẩm vào hệ thống lưu trữ trong vòng 30 khối, đặt nó bên dưới rương ", " Tạo Xe buýt Xuất kho để tự động lấy các vật phẩm ra từ hệ thống lưu trữ trong vòng 30 khối. Đấm vào xe buýt với một vật phẩm để xuất nó "]
let thdescriptions = ["ทำตะแกรงโดยใช้ไม้และแผ่นไม้", "ประดิษฐ์คดหรือกรรไกรเพื่อเก็บใบไม้", "ประดิษฐ์ถังไม้แล้วใส่ใบไม้ลงไปเพื่อสร้างน้ำ", "เก็บก้อนกรวดโดยทำดินด้วยใบไม้และใส่ดินลงไป ตะแกรง", "สร้างค้อนไม้และใช้มันเพื่อทุบหินกรวดเพื่อทำกรวดและทำลายกรวดเพื่อทำทราย ทำให้แน่ใจว่าคุณตั้งค่าภาษาของเกมมายคราฟเป็นภาษาอังกฤษเพื่อให้ใช้งานได้!", "ใส่กรวดลงในตะแกรงแล้วคุณ มีโอกาสได้นักเก็ตเพชร ใส่ทรายในตะแกรงมีโอกาสให้เพชรสูงกว่า", "สร้าง Power Core แล้ววางลง เครื่องนี้จะรวบรวมพลังจากเครื่องปั่นไฟในรัศมี 30 บล็อกและจะใช้เพื่อ เครื่องจักรไฟฟ้าในรัศมี 30 บล็อก", "สร้างตะแกรงอัตโนมัติเพื่อกรองสิ่งของที่อยู่ด้านบนหรือจากมือของคุณทันที วางไว้ภายใน 30 บล็อกของแกนพลังงานและให้ RF แกนพลังงานจากเครื่องกำเนิดพลังงานแสงอาทิตย์", "Craft a Stone Barrel และใส่หินกรวดลงไปเพื่อสร้างลาวา", "สร้างเครื่องกำเนิดหินกรวดเพื่อผลิตโดยอัตโนมัติ อี ก้อนหินปูถนน คุณสามารถใส่ก้อนหินปูถนนนี้ลงในหีบโดยใช้สายพานลำเลียงและถังพัก ", "สร้างเครื่องบดเพื่อทำให้ตะแกรงอัตโนมัติของคุณทำงานโดยอัตโนมัติ ให้สายพานลำเลียงไปจากเครื่องกำเนิดหินกรวด ไปที่เครื่องบด แล้วก็ไปที่ตะแกรงอัตโนมัติ จากนั้นใช้กรวยใส่ทั้งหมดลงในหีบ", "Craft a Void Miner เครื่องจักรนี้จะสร้างแร่แบบสุ่มหากมีกำลังเพียงพอ", "เตาหลอมเชิงกลจะเพิ่มแร่เป็นสองเท่าเป็นแท่งเมื่อใดก็ตามที่แร่อยู่เหนือเครื่องจักร", "ใช้ Matter Converter เพื่อเปลี่ยนทรายให้เป็นทรายวิญญาณ จากนั้นจึงกรองทรายแห่งจิตวิญญาณเพื่อหาทรัพยากรใต้ถุน", "เทเลพอร์ตไปยังจุดสิ้นสุดด้วยการทำ End Cake", "ประดิษฐ์ต้นอ่อนหินกรวด", "ประดิษฐ์ต้นอ่อนถ่านหิน", "ประดิษฐ์ต้นกล้าเหล็ก", "ประดิษฐ์ต้นอ่อนทองคำ", "ประดิษฐ์ต้นกล้าหินแดง", "ประดิษฐ์กล้าไม้ลาพิส", "งานฝีมือ Diamond Sapling", "Craft a Emerald Sapling", "Craft a Quartz Sapling", "Craft a Cogwheel, this machine is used to power all the machines in the create addon and must be hooked up between all machines", "The Manual ข้อเหวี่ยงจะหมุนเกียร์ที่เชื่อมต่อทั้งหมดเมื่อมีการใช้งาน", "เครื่องนี้จะวางบล็อกหินกรวดด้านล่างเมื่อเปิดใช้งานเกียร์ที่เชื่อมต่อ", "นี้ เครื่องจักรจะเปลี่ยนก้อนหินปูถนนด้านบนให้เป็นกรวด และก้อนกรวดกลายเป็นทรายด้านล่างทุกครั้งที่มีการเปิดใช้งานล้อเฟืองที่เชื่อมต่ออยู่", "ตะแกรงกลจะเปลี่ยนทรายหรือก้อนกรวดด้านบนให้เป็นทรัพยากรเช่นเหล็กเมื่อเปิดใช้งานโดยล้อเฟือง", "สร้างสายไฟเพื่อใช้เชื่อมต่อเครื่องจักรเข้าด้วยกันและถ่ายโอนพลังงาน", "สร้างเครื่องขุดควอนตัมและใช้สายไฟเพื่อเชื่อมต่อกับแผงโซลาร์เซลล์ เครื่องนี้จะผลิตแร่ทุกครั้งที่มีการขับเคลื่อน", "หากต้องการสร้างพลาสติก นำแท่นขุดเจาะน้ำมัน ให้พลังงาน จากนั้นใช้สายเคเบิลของเหลวเพื่อส่งน้ำมันไปยังโรงกลั่นพลาสติก ตรวจสอบให้แน่ใจว่ามีพลังงานเพียงพอ", "ในการสร้างซิลิคอนให้กับคุณ จำเป็นต้องสร้างก๊าซคาร์บอนโดยใส่น้ำมันลงในเครื่องแยกของเหลว ใส่ลงในโรงงานซิลิกอน พร้อมกับน้ำและลาวาจากปั๊มของไหล และใส่พลังงานขั้นสูงในโรงงานโดยใช้ Power Upgrader", "สร้างแผงวงจรโดยใช้พลาสติก และซิลิกอน", "ประดิษฐ์เครื่องสร้าง Exp เพื่อสร้างประสบการณ์ของเหลว ใส่ของเหลวลงในถังของเหลว และวางเครื่องส่ง Exp ใต้ถังของเหลวเพื่อให้คุณได้รับ exp โดยอัตโนมัติ", "สร้างเครื่องอัดก้อนกรวดหิน เครื่องนี้จะรวบรวมหินกรวดในบริเวณใกล้เคียงและบีบอัด โต้ตอบกับเครื่องเพื่อเอาหินก้อนกรวดออก", "สร้างแท่งหินกรวดจากหินกรวดกว่า 500,000 ก้อน", "สร้างดาบ Bedrockium จากก้อนหินปูถนนกว่า 1,000,000 ก้อน", "สร้างตารางมนต์เสน่ห์ที่กำหนดเองเพื่อ เพิ่มความลุ่มหลงแบบกำหนดเองให้กับอาวุธของคุณ", "สร้างคลังเก็บสินค้า เครื่องจักรนี้เหมาะสำหรับการเก็บสิ่งของได้มากเท่าที่คุณต้องการ", "ประดิษฐ์รถนำเข้าสำหรับจัดเก็บเพื่อใส่สิ่งของลงในระบบการจัดเก็บภายใน 30 บล็อกโดยอัตโนมัติ วางไว้ใต้หีบ", "สร้างรถบัสส่งออกสำหรับจัดเก็บเพื่อนำสิ่งของออกโดยอัตโนมัติ จากระบบจัดเก็บข้อมูลภายใน 30 บล็อก ต่อยรถเมล์ด้วยสิ่งของเพื่อส่งออก"]

function showWiki(player) {
    let descriptions = null
    let list = []
    const form = new ActionFormData()
        .title("§cAgent Select")
        .button("Search", `textures/ui/magnifyingGlass`)
    let count = 0
    for (const i of items) {
        if (Items.get(i)) {
            if (!player.hasTag(i)) {
                form.button(title[count] + "\n" + addonname[count], `textures/${icon[count]}`)
            } else {
                form.button(title[count] + "\n" + addonname[count], `textures/ui/confirm`)
            }
            list.push(count)
        }
        count = count + 1
    }
    if (player.hasTag("WikiIndo")) {
        descriptions = indescriptions
        form.button("Reset Language", `textures/items/flag_indo`)
    } else if (player.hasTag("WikiPort")) {
        descriptions = podescriptions
        form.button("Reset Language", `textures/items/flag_brazil`)
    } else if (player.hasTag("WikiFili")) {
        descriptions = fidescriptions
        form.button("Reset Language", `textures/items/flag_phili`)
    } else if (player.hasTag("WikiViet")) {
        descriptions = videscriptions
        form.button("Reset Language", `textures/items/flag_viet`)
    } else if (player.hasTag("WikiThai")) {
        descriptions = thdescriptions
        form.button("Reset Language", `textures/items/flag_thai`)
    } else {
        descriptions = edescriptions
        form.button("Reset Language", `textures/items/flag_english`)
    }
    form.show(player).then(response => {
        if (!response.isCanceled) {
            if (response.selection == 0) {
                const form3 = new ModalFormData()
                    .title('Search Wikibook')
                    .textField('Search', '')
                form3.show(player).then(response3 => {
                    if (!response3.isCanceled) {
                        searchWiki(player, response3.formValues[0].toLowerCase())
                    }
                })
            } else if (response.selection == list.length + 1) {
                player.removeTag("WikiLanguage")
                player.removeTag("WikiEnglish")
                player.removeTag("WikiIndo")
                player.removeTag("WikiHindi")
                player.removeTag("WikiPort")
                player.removeTag("WikiFili")
                player.removeTag("WikiViet")
                player.removeTag("WikiTurk")
                player.removeTag("WikiThai")
                showLang(player)
            } else {
                const form2 = new ActionFormData()
                    .title(title[list[response.selection - 1]])
                    .body(addonname[list[response.selection - 1]] + "§r\n\n" + descriptions[list[response.selection - 1]])
                    .button("Back", `textures/${icon[list[response.selection-1]]}`)
                    .button(`Claim Reward\n${rewards[list[[response.selection-1]]][1]} ${rewards[list[[response.selection-1]]][0].split(/:(.*)/s)[1].replaceAll('_', ' ').toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}`, `textures/ui/confirm`)
                    .button("Close")
                form2.show(player).then(response2 => {
                    if (!response2.isCanceled) {
                        if (response2.selection == 0) {
                            showWiki(player)
                        } else if (response2.selection == 1 && !player.hasTag(items[list[response.selection - 1]])) {
                            for (let i = 0; i < 36; i++) {
                                if (player.getComponent("inventory").container.getItem(i) && player.getComponent("inventory").container.getItem(i).typeId == items[list[response.selection - 1]]) {
                                    player.runCommandAsync(`give @s ${rewards[list[[response.selection-1]]][0]} ${rewards[list[[response.selection-1]]][1]}`)
                                    player.addTag(items[list[response.selection - 1]])
                                    break
                                }
                            }
                        }
                    }
                })
            }
        }
    })
}
// && (i.split(/:(.*)/s)[1].replaceAll('_', ' ').toLowerCase().includes(term) || addonname[count].toLowerCase().includes(term))
function searchWiki(player, term) {
    let descriptions = null
    let list = []
    const form = new ActionFormData()
        .title("Quest Book")
        .button("Search", `textures/ui/magnifyingGlass`)
    let count = 0
    for (const i of items) {
        if (Items.get(i) && (title[count].toLowerCase().includes(term) || addonname[count].toLowerCase().includes(term))) {
            if (!player.hasTag(i)) {
                form.button(title[count] + "\n" + addonname[count], `textures/${icon[count]}`)
            } else {
                form.button(title[count] + "\n" + addonname[count], `textures/ui/confirm`)
            }
            list.push(count)
        }
        count = count + 1
    }
    if (player.hasTag("WikiIndo")) {
        descriptions = indescriptions
        form.button("Reset Language", `textures/items/flag_indo`)
    } else if (player.hasTag("WikiPort")) {
        descriptions = podescriptions
        form.button("Reset Language", `textures/items/flag_brazil`)
    } else if (player.hasTag("WikiFili")) {
        descriptions = fidescriptions
        form.button("Reset Language", `textures/items/flag_phili`)
    } else if (player.hasTag("WikiViet")) {
        descriptions = videscriptions
        form.button("Reset Language", `textures/items/flag_viet`)
    } else if (player.hasTag("WikiThai")) {
        descriptions = thdescriptions
        form.button("Reset Language", `textures/items/flag_thai`)
    } else {
        descriptions = edescriptions
        form.button("Reset Language", `textures/items/flag_english`)
    }
    form.show(player).then(response => {
        if (!response.isCanceled) {
            if (response.selection == 0) {
                const form3 = new ModalFormData()
                    .title('Search Wikibook')
                    .textField('Search', '')
                form3.show(player).then(response3 => {
                    if (!response3.isCanceled) {
                        searchWiki(player, response3.formValues[0].toLowerCase())
                    }
                })
            } else if (response.selection == list.length + 1) {
                player.removeTag("SelectedAgent")
                player.removeTag("jett")
                player.removeTag("WikiIndo")
                player.removeTag("WikiHindi")
                player.removeTag("WikiPort")
                player.removeTag("WikiFili")
                player.removeTag("WikiViet")
                player.removeTag("WikiTurk")
                player.removeTag("WikiThai")
                showLang(player)
            } else {
                const form2 = new ActionFormData()
                    .title(title[list[response.selection - 1]])
                    .body(addonname[list[response.selection - 1]] + "§r\n\n" + descriptions[list[response.selection - 1]])
                    .button("Back", `textures/${icon[list[response.selection-1]]}`)
                    .button(`Claim Reward\n${rewards[list[[response.selection-1]]][1]} ${rewards[list[[response.selection-1]]][0].split(/:(.*)/s)[1].replaceAll('_', ' ').toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}`, `textures/ui/confirm`)
                    .button("Close")
                form2.show(player).then(response2 => {
                    if (!response2.isCanceled) {
                        if (response2.selection == 0) {
                            showWiki(player)
                        } else if (response2.selection == 1 && !player.hasTag(items[list[response.selection - 1]])) {
                            for (let i = 0; i < 36; i++) {
                                if (player.getComponent("inventory").container.getItem(i) && player.getComponent("inventory").container.getItem(i).typeId == items[list[response.selection - 1]]) {
                                    player.runCommandAsync(`give @s ${rewards[list[[response.selection-1]]][0]} ${rewards[list[[response.selection-1]]][1]}`)
                                    player.addTag(items[list[response.selection - 1]])
                                    break
                                }
                            }
                        }
                    }
                }
                )
            }
        }
    })
}
//Agents Screen

//Agent Select Screen
function showDuelist(player) {
    const form = new ActionFormData()
        .title("§cDuelists")
        .body("Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.")
        .button("02 §cPhoenix", `textures/items/phoenix`)
        .button("07 §5Reyna", `textures/items/reyna`)
        .button("11 §fJett", `textures/items/jett`)
        .button("12 §6Raze", `textures/items/raze`)
        .button("14 §9Yoru", `textures/items/yoru`)
        .button("18 §bNeon", `textures/items/neon`)
        .button("Cancel")

    form.show(player).then(response => {
        if (!response.isCanceled) {
            if (response.selection == 0) {
                function showPhoenix(player) {
                    const form = new ActionFormData()
                        .title("§cPhoenix")
                        .body("Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.")
                        .button("§aConfirm", `textures/items/phoenix`)
                        .button("§cCancel", `textures/blocks/barrier`)
                
                    form.show(player).then(response => {
                        if (!response.isCanceled) {
                            if (response.selection == 0) {
                                player.addTag("Phoenix")
                                player.addTag("SelectedAgent")
                            } else if (response.selection == 1) {
                                showDuelist(player)
                            }
                        }
                    })
                }
                showPhoenix(player)
            } else if (response.selection == 1) {
                function showReyna(player) {
                    const form = new ActionFormData()
                        .title("§5Reyna")
                        .body("Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.")
                        .button("§aConfirm", `textures/items/reyna`)
                        .button("§cCancel", `textures/blocks/barrier`)
                
                    form.show(player).then(response => {
                        if (!response.isCanceled) {
                            if (response.selection == 0) {
                                player.addTag("Reyna")
                                player.addTag("SelectedAgent")
                            } else if (response.selection == 1) {
                                showDuelist(player)
                            }
                        }
                    })
                }
                showReyna(player)
            } else if (response.selection == 2) {
                function showJett(player) {
                    const form = new ActionFormData()
                        .title("§fJett")
                        .body("Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.")
                        .button("§aConfirm", `textures/items/jett`)
                        .button("§cCancel", `textures/blocks/barrier`)
                
                    form.show(player).then(response => {
                        if (!response.isCanceled) {
                            if (response.selection == 0) {
                                player.addTag("Jett")
                                player.addTag("SelectedAgent")
                            } else if (response.selection == 1) {
                                showDuelist(player)
                            }
                        }
                    })
                }
                showJett(player)
            } else if (response.selection == 3) {
                function showRaze(player) {
                    const form = new ActionFormData()
                        .title("§6Raze")
                        .body("Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of BOOM.")
                        .button("§aConfirm", `textures/items/raze`)
                        .button("§cCancel", `textures/blocks/barrier`)
                
                    form.show(player).then(response => {
                        if (!response.isCanceled) {
                            if (response.selection == 0) {
                                player.addTag("Raze")
                                player.addTag("SelectedAgent")
                            } else if (response.selection == 1) {
                                showDuelist(player)
                            }
                        }
                    })
                }
                showRaze(player)
            } else if (response.selection == 4) {
                function showYoru(player) {
                    const form = new ActionFormData()
                        .title("§9Yoru")
                        .body("Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.")
                        .button("§aConfirm", `textures/items/yoru`)
                        .button("§cCancel", `textures/blocks/barrier`)
                
                    form.show(player).then(response => {
                        if (!response.isCanceled) {
                            if (response.selection == 0) {
                                player.addTag("Yoru")
                                player.addTag("SelectedAgent")
                            } else if (response.selection == 1) {
                                showDuelist(player)
                            }
                        }
                    })
                }
                showYoru(player)
            } else if (response.selection == 5) {
                function showNeon(player) {
                    const form = new ActionFormData()
                        .title("§bNeon")
                        .body("Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.")
                        .button("§aConfirm", `textures/items/neon`)
                        .button("§cCancel", `textures/blocks/barrier`)
                
                    form.show(player).then(response => {
                        if (!response.isCanceled) {
                            if (response.selection == 0) {
                                player.addTag("Neon")
                                player.addTag("SelectedAgent")
                            } else if (response.selection == 1) {
                                showDuelist(player)
                            }
                        }
                    })
                }
                showNeon(player)
            } else if (response.selection == response.selection.length-1) {
                showRoles(player)
            } 
        }
    })
}

function showSentinel(player) {
    const form = new ActionFormData()
        .title("§fSentinels")
        .body("Sentinels are defensive experts who can lock down areas and watch flanks, both on attacker and defender rounds.")
        .button("03 §bSage", `textures/items/sage`)
        .button("06 §fCypher", `textures/items/cypher`)
        .button("08 §eKilljoy", `textures/items/kj`)
        .button("17 §6Chamber", `textures/items/chamber`)
        .button("Cancel")

    form.show(player).then(response => {
        if (!response.isCanceled) {
            if (response.selection == 0) {
                function showSage(player) {
                    const form = new ActionFormData()
                        .title("§bSage")
                        .body("The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.")
                        .button("§aConfirm", `textures/items/sage`)
                        .button("§cCancel", `textures/blocks/barrier`)
                
                    form.show(player).then(response => {
                        if (!response.isCanceled) {
                            if (response.selection == 0) {
                                player.addTag("Sage")
                                player.addTag("SelectedAgent")
                            } else if (response.selection == 1) {
                                showSentinel(player)
                            }
                        }
                    })
                }
                showSage(player)
            } else if (response.selection == 1) {
                function showCypher(player) {
                    const form = new ActionFormData()
                        .title("§fCypher")
                        .body("The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.")
                        .button("§aConfirm", `textures/items/cypher`)
                        .button("§cCancel", `textures/blocks/barrier`)
                
                    form.show(player).then(response => {
                        if (!response.isCanceled) {
                            if (response.selection == 0) {
                                player.addTag("Cypher")
                                player.addTag("SelectedAgent")
                            } else if (response.selection == 1) {
                                showSentinel(player)
                            }
                        }
                    })
                }
                showCypher(player)
            } else if (response.selection == 2) {
                function showKilljoy(player) {
                    const form = new ActionFormData()
                        .title("§eKilljoy")
                        .body("The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.")
                        .button("§aConfirm", `textures/items/kj`)
                        .button("§cCancel", `textures/blocks/barrier`)
                
                    form.show(player).then(response => {
                        if (!response.isCanceled) {
                            if (response.selection == 0) {
                                player.addTag("Killjoy")
                                player.addTag("SelectedAgent")
                            } else if (response.selection == 1) {
                                showSentinel(player)
                            }
                        }
                    })
                }
                showKilljoy(player)
            } else if (response.selection == 3) {
                function showChamber(player) {
                    const form = new ActionFormData()
                        .title("§6Chamber")
                        .body("Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.")
                        .button("§aConfirm", `textures/items/chamber`)
                        .button("§cCancel", `textures/blocks/barrier`)
                
                    form.show(player).then(response => {
                        if (!response.isCanceled) {
                            if (response.selection == 0) {
                                player.addTag("Chamber")
                                player.addTag("SelectedAgent")
                            } else if (response.selection == 1) {
                                showSentinel(player)
                            }
                        }
                    })
                }
                showChamber(player)
            } else if (response.selection == response.selection.length-1) {
                showRoles(player)
            } 
        }
    })
}

function showController(player) {
    const form = new ActionFormData()
        .title("§6Controllers")
        .body("Controllers are experts in slicing up dangerous territory to set their team up for success.")
        .button("01 §6Brimstone", `textures/items/brimstone`)
        .button("05 §2Viper", `textures/items/viper`)
        .button("10 §8Omen", `textures/items/omen`)
        .button("15 §dAstra", `textures/items/astra`)
        .button("20 §9Harbor", `textures/items/harbor`)
        .button("Cancel")

    form.show(player).then(response => {
        if (!response.isCanceled) {
            if (response.selection == 0) {
                player.addTag("SelectedAgent")
            } else if (response.selection == 1) {
                player.addTag("SelectedAgent")
            } else if (response.selection == 2) {
                player.addTag("SelectedAgent")
            } else if (response.selection == 3) {
                player.addTag("SelectedAgent")
            } else if (response.selection == 4) {
                player.addTag("SelectedAgent")
            } else if (response.selection == response.selection.length-1) {
                showRoles(player)
            } 
        }
    })
}

function showInitiator(player) {
    const form = new ActionFormData()
        .title("§bInitiators")
        .body("Initiators challenge angles by setting up their team to enter contested ground and push defenders away.")
        .button("04 §bSova", `textures/items/sova`)
        .button("09 §6Breach", `textures/items/breach`)
        .button("13 §2Skye", `textures/items/skye`)
        .button("16 §3KAY/O", `textures/items/ko`)
        .button("19 §7Fade", `textures/items/fade`)
        .button("Cancel")

    form.show(player).then(response => {
        if (!response.isCanceled) {
            if (response.selection == 0) {
                player.addTag("SelectedAgent")
            } else if (response.selection == 1) {
                player.addTag("SelectedAgent")
            } else if (response.selection == 2) {
                player.addTag("SelectedAgent")
            } else if (response.selection == 3) {
                player.addTag("SelectedAgent")
            } else if (response.selection == 4) {
                player.addTag("SelectedAgent")
            } else if (response.selection == response.selection.length-1) {
                showRoles(player)
            } 
        }
    })
}

function showRoles(player) {
    const form = new ActionFormData()
        .title("§l§fAgent Select")
        .body("Select your agent")
        .button("§cDuelists")
        .button("§fSentinels")
        .button("§6Controller")
        .button("§bInitiators")

    form.show(player).then(response => {
        if (!response.isCanceled) {
            if (response.selection == 0) {
                showDuelist(player)
            } else if (response.selection == 1) {
                showSentinel(player)
            } else if (response.selection == 2) {
                showController(player)
            } else if (response.selection == 3) {
                showInitiator(player)
            }
        }
    })
}

world.events.itemUse.subscribe(v => {
    if (v.item.typeId == "vatonage:questbook") {
        if (v.source.hasTag("SelectedAgent")) {
            showWiki(v.source)
        } else {
            showRoles(v.source)
        }
    }
})