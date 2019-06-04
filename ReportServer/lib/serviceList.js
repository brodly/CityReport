module.exports = {
  'Graffiti Removal': {
    select: 'pt1:r1:0:r1:0:r1:0:s1:t1:3:it2::content',
    'Graffiti Removal': 'pt1:r1:0:r1:0:r1:0:s1:t2:0:sbr1::content',
    details: {
      wall: 'pt1:r1:0:r1:0:r1:2:r1:0:r1:0:t1:38:sbc1::content',
      select: {
        open: 'pt1:r1:0:r1:0:r1:2:r1:0:r1:0:soc1::content',
        other: 'Other',
        manager: 'Manager',
        owner: 'Owner',
        resident: 'Resident',
      }
    }
  },
  pothole: {
    select: 'pt1:r1:0:r1:0:r1:0:s1:t1:6:it2::content',
    pothole: 'pt1:r1:0:r1:0:r1:0:s1:t2:8:sbr1::content',
    details: {
      alley: 'pt1:r1:0:r1:0:r1:2:r1:0:sor1:_0',
      street: 'pt1:r1:0:r1:0:r1:2:r1:0:sor1:_1',
    }
  }
}
