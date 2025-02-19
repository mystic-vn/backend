import { Connection } from 'mongoose';

export interface RelatedIds {
  cardIds: {
    // Major Arcana
    fool: string;
    magician: string;
    highPriestess: string;
    empress: string;
    emperor: string;
    hierophant: string;
    lovers: string;
    chariot: string;
    strength: string;
    hermit: string;
    wheelOfFortune: string;
    justice: string;
    hangedMan: string;
    death: string;
    temperance: string;
    devil: string;
    tower: string;
    star: string;
    moon: string;
    sun: string;
    judgement: string;
    world: string;

    // Wands
    aceOfWands: string;
    twoOfWands: string;
    threeOfWands: string;
    fourOfWands: string;
    fiveOfWands: string;
    sixOfWands: string;
    sevenOfWands: string;
    eightOfWands: string;
    nineOfWands: string;
    tenOfWands: string;
    pageOfWands: string;
    knightOfWands: string;
    queenOfWands: string;
    kingOfWands: string;

    // Cups
    aceOfCups: string;
    twoOfCups: string;
    threeOfCups: string;
    fourOfCups: string;
    fiveOfCups: string;
    sixOfCups: string;
    sevenOfCups: string;
    eightOfCups: string;
    nineOfCups: string;
    tenOfCups: string;
    pageOfCups: string;
    knightOfCups: string;
    queenOfCups: string;
    kingOfCups: string;

    // Pentacles
    aceOfPentacles: string;
    twoOfPentacles: string;
    threeOfPentacles: string;
    fourOfPentacles: string;
    fiveOfPentacles: string;
    sixOfPentacles: string;
    sevenOfPentacles: string;
    eightOfPentacles: string;
    nineOfPentacles: string;
    tenOfPentacles: string;
    pageOfPentacles: string;
    knightOfPentacles: string;
    queenOfPentacles: string;
    kingOfPentacles: string;

    // Swords
    aceOfSwords: string;
    twoOfSwords: string;
    threeOfSwords: string;
    fourOfSwords: string;
    fiveOfSwords: string;
    sixOfSwords: string;
    sevenOfSwords: string;
    eightOfSwords: string;
    nineOfSwords: string;
    tenOfSwords: string;
    pageOfSwords: string;
    knightOfSwords: string;
    queenOfSwords: string;
    kingOfSwords: string;
  };
  contextIds: {
    tinhYeu: string;     // Tình yêu
    giaDao: string;      // Gia đạo
    giaDinh: string;     // Gia đình
    congViec: string;    // Công việc
    taiChinh: string;    // Tài chính
    quanHeXaHoi: string; // Các mối quan hệ xã hội
  };
}

export interface CardContextData {
  cardId: string;
  contextId: string;
  keywords: string[];
  meaningUpright: string;
  meaningReversed: string;
  advice: string;
}

export async function getRelatedIds(connection: Connection): Promise<RelatedIds> {
  const CardModel = connection.model('Card');
  const ContextModel = connection.model('Context');

  // Lấy ID của tất cả các lá bài
  const [
    // Major Arcana
    fool, magician, highPriestess, empress, emperor,
    hierophant, lovers, chariot, strength, hermit,
    wheelOfFortune, justice, hangedMan, death, temperance,
    devil, tower, star, moon, sun, judgement, world,
    // Wands
    aceOfWands, twoOfWands, threeOfWands, fourOfWands,
    fiveOfWands, sixOfWands, sevenOfWands, eightOfWands,
    nineOfWands, tenOfWands, pageOfWands, knightOfWands,
    queenOfWands, kingOfWands,
    // Cups
    aceOfCups, twoOfCups, threeOfCups, fourOfCups,
    fiveOfCups, sixOfCups, sevenOfCups, eightOfCups,
    nineOfCups, tenOfCups, pageOfCups, knightOfCups,
    queenOfCups, kingOfCups,
    // Pentacles
    aceOfPentacles, twoOfPentacles, threeOfPentacles, fourOfPentacles,
    fiveOfPentacles, sixOfPentacles, sevenOfPentacles, eightOfPentacles,
    nineOfPentacles, tenOfPentacles, pageOfPentacles, knightOfPentacles,
    queenOfPentacles, kingOfPentacles,
    // Swords
    aceOfSwords, twoOfSwords, threeOfSwords, fourOfSwords,
    fiveOfSwords, sixOfSwords, sevenOfSwords, eightOfSwords,
    nineOfSwords, tenOfSwords, pageOfSwords, knightOfSwords,
    queenOfSwords, kingOfSwords
  ] = await Promise.all([
    // Major Arcana
    CardModel.findOne({ name: 'The Fool' }),
    CardModel.findOne({ name: 'The Magician' }),
    CardModel.findOne({ name: 'The High Priestess' }),
    CardModel.findOne({ name: 'The Empress' }),
    CardModel.findOne({ name: 'The Emperor' }),
    CardModel.findOne({ name: 'The Hierophant' }),
    CardModel.findOne({ name: 'The Lovers' }),
    CardModel.findOne({ name: 'The Chariot' }),
    CardModel.findOne({ name: 'Strength' }),
    CardModel.findOne({ name: 'The Hermit' }),
    CardModel.findOne({ name: 'Wheel of Fortune' }),
    CardModel.findOne({ name: 'Justice' }),
    CardModel.findOne({ name: 'The Hanged Man' }),
    CardModel.findOne({ name: 'Death' }),
    CardModel.findOne({ name: 'Temperance' }),
    CardModel.findOne({ name: 'The Devil' }),
    CardModel.findOne({ name: 'The Tower' }),
    CardModel.findOne({ name: 'The Star' }),
    CardModel.findOne({ name: 'The Moon' }),
    CardModel.findOne({ name: 'The Sun' }),
    CardModel.findOne({ name: 'Judgement' }),
    CardModel.findOne({ name: 'The World' }),
    // Wands
    CardModel.findOne({ name: 'Ace of Wands' }),
    CardModel.findOne({ name: 'Two of Wands' }),
    CardModel.findOne({ name: 'Three of Wands' }),
    CardModel.findOne({ name: 'Four of Wands' }),
    CardModel.findOne({ name: 'Five of Wands' }),
    CardModel.findOne({ name: 'Six of Wands' }),
    CardModel.findOne({ name: 'Seven of Wands' }),
    CardModel.findOne({ name: 'Eight of Wands' }),
    CardModel.findOne({ name: 'Nine of Wands' }),
    CardModel.findOne({ name: 'Ten of Wands' }),
    CardModel.findOne({ name: 'Page of Wands' }),
    CardModel.findOne({ name: 'Knight of Wands' }),
    CardModel.findOne({ name: 'Queen of Wands' }),
    CardModel.findOne({ name: 'King of Wands' }),
    // Cups
    CardModel.findOne({ name: 'Ace of Cups' }),
    CardModel.findOne({ name: 'Two of Cups' }),
    CardModel.findOne({ name: 'Three of Cups' }),
    CardModel.findOne({ name: 'Four of Cups' }),
    CardModel.findOne({ name: 'Five of Cups' }),
    CardModel.findOne({ name: 'Six of Cups' }),
    CardModel.findOne({ name: 'Seven of Cups' }),
    CardModel.findOne({ name: 'Eight of Cups' }),
    CardModel.findOne({ name: 'Nine of Cups' }),
    CardModel.findOne({ name: 'Ten of Cups' }),
    CardModel.findOne({ name: 'Page of Cups' }),
    CardModel.findOne({ name: 'Knight of Cups' }),
    CardModel.findOne({ name: 'Queen of Cups' }),
    CardModel.findOne({ name: 'King of Cups' }),
    // Pentacles
    CardModel.findOne({ name: 'Ace of Pentacles' }),
    CardModel.findOne({ name: 'Two of Pentacles' }),
    CardModel.findOne({ name: 'Three of Pentacles' }),
    CardModel.findOne({ name: 'Four of Pentacles' }),
    CardModel.findOne({ name: 'Five of Pentacles' }),
    CardModel.findOne({ name: 'Six of Pentacles' }),
    CardModel.findOne({ name: 'Seven of Pentacles' }),
    CardModel.findOne({ name: 'Eight of Pentacles' }),
    CardModel.findOne({ name: 'Nine of Pentacles' }),
    CardModel.findOne({ name: 'Ten of Pentacles' }),
    CardModel.findOne({ name: 'Page of Pentacles' }),
    CardModel.findOne({ name: 'Knight of Pentacles' }),
    CardModel.findOne({ name: 'Queen of Pentacles' }),
    CardModel.findOne({ name: 'King of Pentacles' }),
    // Swords
    CardModel.findOne({ name: 'Ace of Swords' }),
    CardModel.findOne({ name: 'Two of Swords' }),
    CardModel.findOne({ name: 'Three of Swords' }),
    CardModel.findOne({ name: 'Four of Swords' }),
    CardModel.findOne({ name: 'Five of Swords' }),
    CardModel.findOne({ name: 'Six of Swords' }),
    CardModel.findOne({ name: 'Seven of Swords' }),
    CardModel.findOne({ name: 'Eight of Swords' }),
    CardModel.findOne({ name: 'Nine of Swords' }),
    CardModel.findOne({ name: 'Ten of Swords' }),
    CardModel.findOne({ name: 'Page of Swords' }),
    CardModel.findOne({ name: 'Knight of Swords' }),
    CardModel.findOne({ name: 'Queen of Swords' }),
    CardModel.findOne({ name: 'King of Swords' })
  ]);

  // Lấy ID của các context dựa theo slug
  const [tinhYeu, giaDao, giaDinh, congViec, taiChinh, quanHeXaHoi] = await Promise.all([
    ContextModel.findOne({ slug: 'tinh-yeu' }),
    ContextModel.findOne({ slug: 'gia-dao' }),
    ContextModel.findOne({ slug: 'gia-dinh' }),
    ContextModel.findOne({ slug: 'cong-viec' }),
    ContextModel.findOne({ slug: 'tai-chinh' }),
    ContextModel.findOne({ slug: 'quan-he-xa-hoi' })
  ]);

  return {
    cardIds: {
      // Major Arcana
      fool: fool._id.toString(),
      magician: magician._id.toString(),
      highPriestess: highPriestess._id.toString(),
      empress: empress._id.toString(),
      emperor: emperor._id.toString(),
      hierophant: hierophant._id.toString(),
      lovers: lovers._id.toString(),
      chariot: chariot._id.toString(),
      strength: strength._id.toString(),
      hermit: hermit._id.toString(),
      wheelOfFortune: wheelOfFortune._id.toString(),
      justice: justice._id.toString(),
      hangedMan: hangedMan._id.toString(),
      death: death._id.toString(),
      temperance: temperance._id.toString(),
      devil: devil._id.toString(),
      tower: tower._id.toString(),
      star: star._id.toString(),
      moon: moon._id.toString(),
      sun: sun._id.toString(),
      judgement: judgement._id.toString(),
      world: world._id.toString(),
      // Wands
      aceOfWands: aceOfWands._id.toString(),
      twoOfWands: twoOfWands._id.toString(),
      threeOfWands: threeOfWands._id.toString(),
      fourOfWands: fourOfWands._id.toString(),
      fiveOfWands: fiveOfWands._id.toString(),
      sixOfWands: sixOfWands._id.toString(),
      sevenOfWands: sevenOfWands._id.toString(),
      eightOfWands: eightOfWands._id.toString(),
      nineOfWands: nineOfWands._id.toString(),
      tenOfWands: tenOfWands._id.toString(),
      pageOfWands: pageOfWands._id.toString(),
      knightOfWands: knightOfWands._id.toString(),
      queenOfWands: queenOfWands._id.toString(),
      kingOfWands: kingOfWands._id.toString(),
      // Cups
      aceOfCups: aceOfCups._id.toString(),
      twoOfCups: twoOfCups._id.toString(),
      threeOfCups: threeOfCups._id.toString(),
      fourOfCups: fourOfCups._id.toString(),
      fiveOfCups: fiveOfCups._id.toString(),
      sixOfCups: sixOfCups._id.toString(),
      sevenOfCups: sevenOfCups._id.toString(),
      eightOfCups: eightOfCups._id.toString(),
      nineOfCups: nineOfCups._id.toString(),
      tenOfCups: tenOfCups._id.toString(),
      pageOfCups: pageOfCups._id.toString(),
      knightOfCups: knightOfCups._id.toString(),
      queenOfCups: queenOfCups._id.toString(),
      kingOfCups: kingOfCups._id.toString(),
      // Pentacles
      aceOfPentacles: aceOfPentacles._id.toString(),
      twoOfPentacles: twoOfPentacles._id.toString(),
      threeOfPentacles: threeOfPentacles._id.toString(),
      fourOfPentacles: fourOfPentacles._id.toString(),
      fiveOfPentacles: fiveOfPentacles._id.toString(),
      sixOfPentacles: sixOfPentacles._id.toString(),
      sevenOfPentacles: sevenOfPentacles._id.toString(),
      eightOfPentacles: eightOfPentacles._id.toString(),
      nineOfPentacles: nineOfPentacles._id.toString(),
      tenOfPentacles: tenOfPentacles._id.toString(),
      pageOfPentacles: pageOfPentacles._id.toString(),
      knightOfPentacles: knightOfPentacles._id.toString(),
      queenOfPentacles: queenOfPentacles._id.toString(),
      kingOfPentacles: kingOfPentacles._id.toString(),
      // Swords
      aceOfSwords: aceOfSwords._id.toString(),
      twoOfSwords: twoOfSwords._id.toString(),
      threeOfSwords: threeOfSwords._id.toString(),
      fourOfSwords: fourOfSwords._id.toString(),
      fiveOfSwords: fiveOfSwords._id.toString(),
      sixOfSwords: sixOfSwords._id.toString(),
      sevenOfSwords: sevenOfSwords._id.toString(),
      eightOfSwords: eightOfSwords._id.toString(),
      nineOfSwords: nineOfSwords._id.toString(),
      tenOfSwords: tenOfSwords._id.toString(),
      pageOfSwords: pageOfSwords._id.toString(),
      knightOfSwords: knightOfSwords._id.toString(),
      queenOfSwords: queenOfSwords._id.toString(),
      kingOfSwords: kingOfSwords._id.toString()
    },
    contextIds: {
      tinhYeu: tinhYeu._id.toString(),
      giaDao: giaDao._id.toString(),
      giaDinh: giaDinh._id.toString(),
      congViec: congViec._id.toString(),
      taiChinh: taiChinh._id.toString(),
      quanHeXaHoi: quanHeXaHoi._id.toString()
    }
  };
} 