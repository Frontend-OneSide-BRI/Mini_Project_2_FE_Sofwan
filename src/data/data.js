const categories = ['All', 'Stadium', 'Player', 'Coys'];

const photos = [
  { id: 1,  category: 'Stadium', url: 'https://images.unsplash.com/photo-1473976345543-9ffc928e648d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80' },
  { id: 2,  category: 'Stadium', url: 'https://media.gettyimages.com/id/1134433426/photo/exterior-of-new-tottenham-hotspur-stadium-in-london-uk.jpg?s=612x612&w=0&k=20&c=s_0yqnNFrmwPuA6Yzd6rZ8Tn-zaGJX4Ygz6U8iSMdIU=' },
  { id: 3,  category: 'Stadium', url: 'https://media.gettyimages.com/id/1396908938/photo/a-general-view-inside-the-stadium-as-fans-hold-up-pieces-of-fabric-to-display-a-message-of.jpg?s=612x612&w=0&k=20&c=5AZN5ZdAsKFEZsZgzNx7Vqz8RFRewbYyJ8sUz8NRQ58=' },
  { id: 4,  category: 'Stadium', url: 'https://media.gettyimages.com/id/1250717691/photo/a-general-view-outside-the-stadium-during-the-premier-league-match-between-tottenham-hotspur.jpg?s=612x612&w=0&k=20&c=3UeyAnvm4qvcilNGMK1l6feRDHa_v6oibPwV38ueyoI=' },
  { id: 5,  category: 'Stadium', url: 'https://media.gettyimages.com/id/1254655768/photo/general-view-inside-the-stadium-during-the-premier-league-match-between-tottenham-hotspur-and.jpg?s=612x612&w=0&k=20&c=FdXLBnT0Bg-BPUgHLrZvNEEFNUNxsln0KwE0-o5siSk=' },
  { id: 6,  category: 'Stadium', url: 'https://media.gettyimages.com/id/1293768377/photo/a-general-view-outside-the-stadium-is-seen-prior-to-the-premier-league-match-between.jpg?s=612x612&w=0&k=20&c=4Hqo1nfsEgy-u5GHZufMpcwtJUVDfDvJEZUNQ-kR8KM=' },
  { id: 7,  category: 'Stadium', url: 'https://media.gettyimages.com/id/1250936278/photo/a-general-view-of-the-action-at-sunset-during-the-premier-league-match-between-tottenham.jpg?s=612x612&w=0&k=20&c=Yp2IbJC1sWPEcZf9sp6vPJGPvEfdCqS3z22H_XWvmgI=' },
  { id: 8,  category: 'Stadium', url: 'https://media.gettyimages.com/id/1137951245/photo/general-view-outside-the-stadium-prior-to-the-u18-premier-league-between-tottenham-hotspur.jpg?s=612x612&w=0&k=20&c=C3q8ck0WaPExvBO9a2M24AoMDI1krZyHsd5LLGALoNo=' },
  { id: 9,  category: 'Player', url: 'https://media.gettyimages.com/id/1484487861/photo/harry-kane-of-tottenham-hotspur-looks-dejected-after-callum-wilson-of-newcastle-united-scored.jpg?s=612x612&w=0&k=20&c=S5WHF7_Cdq8BvcPJdeupYhSQMYRUZ09gqlVeZwyn3sA=' },
  { id: 10,  category: 'Player', url: 'https://media.gettyimages.com/id/1484474210/photo/harry-kane-of-tottenham-hotspur-speaks-to-teammates-after-newcastle-united-scored-their-sides.jpg?s=612x612&w=0&k=20&c=8kE2zZOqDvrvdFLJ4qLOKLbSyZSRdTFatc9AUJeiIhM=' },
  { id: 11,  category: 'Player', url: 'https://media.gettyimages.com/id/1354719738/photo/sergio-reguilon-of-tottenham-hotspur-celebrates-with-team-mates-after-scoring-their-sides.jpg?s=612x612&w=0&k=20&c=yqIrBqsuVzIaD4cZrWM7KlsJcqlsKjuQo9HZFR3L6Eo=' },
  { id: 12,  category: 'Player', url: 'https://media.gettyimages.com/id/1472805370/photo/son-heung-min-of-tottenham-hotspur-celebrates-after-scoring-the-teams-third-goal-during-the.jpg?s=612x612&w=0&k=20&c=QGE4GMBdUNH8fMsMX4OrZ1BwOWkx7Jn0uKIcgh2ntV8=' },
  { id: 13,  category: 'Player', url: 'https://media.gettyimages.com/id/1469757987/photo/harry-kane-of-tottenham-hotspurcelebrates-scoring-their-teams-second-goal-during-the-premier.jpg?s=612x612&w=0&k=20&c=d_1-FUwfvml7tJCHkg7WGwOrz9cWn3ipMvTV2pDU5RM=' },
  { id: 14,  category: 'Player', url: 'https://media.gettyimages.com/id/1354718534/photo/sergio-reguilon-of-tottenham-hotspur-celebrates-after-scoring-their-sides-second-goal-during.jpg?s=612x612&w=0&k=20&c=pUccGTy9giqNT07PBuIRG3L-uN8uf0quF1bPOsBp0VM=' },
  { id: 15,  category: 'Player', url: 'https://media.gettyimages.com/id/1315892582/photo/gareth-bale-of-tottenham-hotspur-celebrates-with-team-mates-after-scoring-their-sides-first.jpg?s=612x612&w=0&k=20&c=azyNdN3VD7glu094Hn9z451d4gVbY0cSiC_XPG5jzB4=' },
  { id: 16,  category: 'Player', url: 'https://media.gettyimages.com/id/1386717274/photo/heung-min-son-of-tottenham-hotspur-celebrates-after-scoring-their-sides-second-goal-during.jpg?s=612x612&w=0&k=20&c=MaiWr8J_tH--jPRE65wXW6YZHdkdA_AX97V0YbcahiI=' },
  { id: 17,  category: 'Coys', url: 'https://media.gettyimages.com/id/1420499153/photo/tottenham-hotspur-fans-celebrate-as-pierre-emile-hojbjerg-of-tottenham-hotspur-celebrates.jpg?s=612x612&w=0&k=20&c=8LGlY6NI_A48yceoL_6i1rn1oeO_C0f9nAdiAjwCC2k=' },
  { id: 18,  category: 'Coys', url: 'https://media.gettyimages.com/id/513901372/photo/a-young-tottenham-hotspur-supporter-reacts-after-harry-kane-of-tottenham-hotspur-scores-his.jpg?s=612x612&w=0&k=20&c=b7skMuQFFquVpxZFTbzNw3qCXo48nu1R7w1P9-3a7sM=' },
  { id: 19,  category: 'Coys', url: 'https://media.gettyimages.com/id/1240837115/photo/tottenham-hotspur-fans-celebrate-during-the-english-premier-league-football-match-between.jpg?s=612x612&w=0&k=20&c=mOKIv7yM117-hebZeRshCCV-I7DchzaMGOpXvv5chpQ=' },
  { id: 20,  category: 'Coys', url: 'https://media.gettyimages.com/id/947183/photo/tottenham-hotspur-fans-during-the-axa-sponsored-fa-cup-semi-final-match-against-arsenal-played-at.jpg?s=612x612&w=0&k=20&c=MdJzEUvxP23Y__TBSqsVm9J4Yf-1QiX3Od6-W3B8Ls8=' },
  { id: 21,  category: 'Coys', url: 'https://media.gettyimages.com/id/671528310/photo/tottenham-spurs-fan-celebrates-after-his-team-scores-during-the-fa-cup-semi-final-football.jpg?s=612x612&w=0&k=20&c=P35WBRDqSE0tXbS-1TXBNzU-TRUgBZPSvk5zk9Mk0Sc=' },
  { id: 22,  category: 'Coys', url: 'https://media.gettyimages.com/id/513901356/photo/a-young-tottenham-hotspur-supporter-reacts-after-harry-kane-of-tottenham-hotspur-scores-his.jpg?s=612x612&w=0&k=20&c=ZS7mguK8fpkqwrg2WQ5owfll8qyJ0Je0QXKZyzQzEmw=' },
  { id: 23,  category: 'Coys', url: 'https://media.gettyimages.com/id/966660/photo/spurs-fans-vent-their-feelings-over-the-departure-of-ex-player-sol-campbell-to-rivals-arsenal.jpg?s=612x612&w=0&k=20&c=gg49LhuIQfVAisuooAA13ywkmr1PXiER5JPYDobS0YA=' },
  { id: 24,  category: 'Coys', url: 'https://media.gettyimages.com/id/869107538/photo/tottenham-fans-celebrate-their-third-goal-during-the-uefa-champions-league-group-h-football.jpg?s=612x612&w=0&k=20&c=9SFXtoYtwji3SJIWK2CvMtVH64gI-GUG4_Mle33XkWM=' },


];

const sliderImages = [
    { id: 1, image: 'https://images.unsplash.com/photo-1473976345543-9ffc928e648d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80' },
    { id: 2, image: 'https://images.unsplash.com/photo-1473976345543-9ffc928e648d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80' },
    { id: 3, image: 'https://images.unsplash.com/photo-1473976345543-9ffc928e648d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80' },
  ];


  export {categories,photos,sliderImages}