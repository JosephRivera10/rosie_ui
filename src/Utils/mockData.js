import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';

export default {
  data: [
    {
      id: '1',
      resolved: false,
      escalated: true,
      incidentName: 'Roller',
      qrCode: 'https://www.youtube.com/watch?v=gyktHss8qmU',
      images: [
        {
          id: 2,
          image: image1,
          imageDescription: 'Unlock roller latch.'
        },
        {
          id: 3,
          image: image2,
          imageDescription: 'Pull roller from brush tube.'
        }
      ],
    },
  ],
};
