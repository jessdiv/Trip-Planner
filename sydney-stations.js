const allCities = ['Aberdeen', 'Adamstown', 'Albion Park', 'Allawah', 'Arncliffe', 'Artarmon', 'Ashfield', 'Asquith', 'Auburn', 'Austinmer', 'Awaba', 'Banksia', 'Bankstown', 'Bardwell Park', 'Bargo', 'Bathurst', 'Beecroft', 'Bell', 'Bellambi', 'Belmore', 'Berala', 'Beresfield', 'Berowra', 'Berry', 'Beverly Hills', 'Bexley North', 'Birrong', 'Blackheath', 'Blacktown', 'Blaxland', 'Bomaderry', 'Bombo', 'Bondi Junction', 'Booragul', 'Bowral', 'Branxton', 'Broadmeadow', 'Bullaburra', 'Bulli', 'Bundanoon', 'Burradoo', 'Burwood', 'Cabramatta', 'Camellia', 'Campbelltown', 'Campsie', 'Canley Vale', 'Canterbury', 'Cardiff', 'Caringbah', 'Carlingford', 'Carlton', 'Carramar', 'Casula', 'Central', 'Chatswood', 'Cheltenham', 'Chester Hill', 'Circular Quay', 'Civic', 'Clarendon', 'Clyde', 'Coalcliff', 'Cockle Creek', 'Coledale', 'Como', 'Concord West', 'Coniston', 'Corrimal', 'Cowan', 'Cringila', 'Cronulla', 'Croydon', 'Dapto', 'Denistone', 'Domestic Airport', 'Doonside', 'Dora Creek', 'Douglas Park', 'Dulwich Hill', 'Dundas', 'Dungog', 'East Hills', 'East Maitland', 'East Richmond', 'Eastwood', 'Edgecliff', 'Edmondson Park', 'Emu Plains', 'Engadine', 'Epping', 'Erskineville', 'Exeter', 'Fairfield', 'Fairy Meadow', 'Fassifern', 'Faulconbridge', 'Flemington', 'Gerringong', 'Glenbrook', 'Glenfield', 'Gordon', 'Gosford', 'Goulburn', 'Granville', 'Green Square', 'Greta', 'Guildford', 'Gymea', 'Hamilton', 'Harris Park', 'Hawkesbury River', 'Hazelbrook', 'Heathcote', 'Helensburgh', 'Hexham', 'High Street', 'Hilldale', 'Holsworthy', 'Homebush', 'Hornsby', 'Hurlstone Park', 'Hurstville', 'Ingleburn', 'International Airport', 'Jannali', 'Katoomba', 'Kembla Grange', 'Kiama', 'Killara', 'Kings Cross', 'Kingsgrove', 'Kingswood', 'Kirrawee', 'Kogarah', 'Koolewong', 'Kotara', 'Lakemba', 'Lapstone', 'Lawson', 'Leightonfield', 'Leppington', 'Leumeah', 'Leura', 'Lewisham', 'Lidcombe', 'Linden', 'Lindfield', 'Lisarow', 'Lithgow', 'Liverpool', 'Lochinvar', 'Loftus', 'Lysaghts', 'Macarthur', 'Macdonaldtown', 'Macquarie Fields', 'Macquarie Park', 'Macquarie University', 'Maitland', 'Marayong', 'Marrickville', 'Martin Place', 'Martins Creek', 'Marulan', 'Mascot', 'Meadowbank', 'Medlow Bath', 'Menangle', 'Menangle Park', 'Merrylands', 'Metford', 'Milsons Point', 'Mindaribba', 'Minnamurra', 'Minto', 'Miranda', 'Mittagong', 'Morisset', 'Mortdale', 'Moss Vale', 'Mount Colah', 'Mount Druitt', 'Mount Kuring-gai', 'Mount Victoria', 'Mulgrave', 'Museum', 'Muswellbrook', 'Narara', 'Narwee', 'Newcastle', 'Newtown', 'Niagara Park', 'Normanhurst', 'North Ryde', 'North Strathfield', 'North Sydney', 'North Wollongong', 'Oak Flats', 'Oatley', 'Olympic Park', 'Otford', 'Ourimbah', 'Padstow', 'Panania', 'Parramatta', 'Paterson', 'Pendle Hill', 'Pennant Hills', 'Penrith', 'Penrose', 'Penshurst', 'Petersham', 'Picton', 'Point Clare', 'Port Kembla', 'Port Kembla North', 'Punchbowl', 'Pymble', 'Quakers Hill', 'Queens Wharf', 'Redfern', 'Regents Park', 'Revesby', 'Rhodes', 'Richmond', 'Riverstone', 'Riverwood', 'Rockdale', 'Rooty Hill', 'Rosehill', 'Roseville', 'Rydalmere', 'Sandgate', 'Scarborough', 'Schofields', 'Scone', 'Sefton', 'Seven Hills', 'Shellharbour Junction', 'Singleton', 'Springwood', 'St James', 'St Leonards', 'St Marys', 'St Peters', 'Stanmore', 'Stanwell Park', 'Strathfield', 'Summer Hill', 'Sutherland', 'Sydenham', 'Tahmoor', 'Tallong', 'Tarro', 'Tascott', 'Telarah', 'Telopea', 'Tempe', 'Teralba', 'Thirroul', 'Thornleigh', 'Thornton', 'Toongabbie', 'Town Hall', 'Towradgi', 'Tuggerah', 'Turramurra', 'Turrella', 'Unanderra', 'Valley Heights', 'Victoria Street', 'Villawood', 'Vineyard', 'Wahroonga', 'Waitara', 'Wallarobba', 'Warabrook', 'Waratah', 'Warnervale', 'Warrawee', 'Warrimoo', 'Warwick Farm', 'Waterfall', 'Waverton', 'Wentworth Falls', 'Wentworthville', 'Werrington', 'West Ryde', 'Westmead', 'Wickham', 'Wiley Park', 'Windsor', 'Wingello', 'Wirragulla', 'Wolli Creek', 'Wollongong', 'Wollstonecraft', 'Wombarra', 'Wondabyne', 'Woodford', 'Woolooware', 'Woonona', 'Woy Woy', 'Wyee', 'Wynyard', 'Wyong', 'Yagoona', 'Yennora', 'Yerrinbool', 'Zig Zag']
