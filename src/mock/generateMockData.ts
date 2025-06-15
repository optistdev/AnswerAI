import { faker } from "@faker-js/faker";

export const generateMockVariables = () =>
  Array.from({ length: 6 }, (_, i) => ({
    id: `v${i + 1}`,
    name: faker.science.chemicalElement().name,
    description: faker.lorem.sentence(),
    active: faker.datatype.boolean(),
  }));

export const generateMockDataPoints = () => {
  const chartMockData = Array.from({ length: 7 }).map(() => {
    const date = faker.date.between({from: '2025-01-01T00:00:00.000Z', to: '2026-01-01T00:00:00.000Z'});

    return {
      date: date,
      value: faker.number.int({ min: 10000, max: 100000 }),
    };
  });

  return chartMockData
};
