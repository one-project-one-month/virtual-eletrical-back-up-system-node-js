import PowerStation from "../../model/PowerStations.js";
import Brand from "../../model/Brands.js";

const data = [
    {
      "model": "EcoPower 1000",
      "watt": 1000,
      "brandId": 1,
      "waveType": "Pure Sine Wave",
      "usableWatt": 900,
      "chargingTime": 6,
      "chargingType": "Solar & AC",
      "inputWatt": 200,
      "inputAmp": 10,
      "outputAmp": 5,
      "powerStationPrice": 799,
      "image": "ecopower_1000.jpg",
      "description": "A powerful portable power station suitable for outdoor use and emergencies."
    },
    {
      "model": "SolarMax 500",
      "watt": 500,
      "brandId": 2,
      "waveType": "Modified Sine Wave",
      "usableWatt": 450,
      "chargingTime": 4,
      "chargingType": "Solar",
      "inputWatt": 150,
      "inputAmp": 7,
      "outputAmp": 3,
      "powerStationPrice": 499,
      "image": "solarmax_500.jpg",
      "description": "Compact and efficient solar power station for camping and off-grid living."
    },
    {
      "model": "PowerVault 1500",
      "watt": 1500,
      "brandId": 3,
      "waveType": "Pure Sine Wave",
      "usableWatt": 1400,
      "chargingTime": 8,
      "chargingType": "AC & DC",
      "inputWatt": 300,
      "inputAmp": 12,
      "outputAmp": 6,
      "powerStationPrice": 999,
      "image": "powervault_1500.jpg",
      "description": "High-capacity battery station perfect for professional and industrial use."
    },
    {
      "model": "LitePower 300",
      "watt": 300,
      "brandId": 1,
      "waveType": "Modified Sine Wave",
      "usableWatt": 280,
      "chargingTime": 3,
      "chargingType": "AC",
      "inputWatt": 100,
      "inputAmp": 5,
      "outputAmp": 2,
      "powerStationPrice": 299,
      "image": "litepower_300.jpg",
      "description": "Lightweight and portable power station, ideal for small devices and travel."
    },
    {
      "model": "EnergyBox 2000",
      "watt": 2000,
      "brandId": 4,
      "waveType": "Pure Sine Wave",
      "usableWatt": 1900,
      "chargingTime": 10,
      "chargingType": "Solar & AC",
      "inputWatt": 350,
      "inputAmp": 15,
      "outputAmp": 8,
      "powerStationPrice": 1299,
      "image": "energybox_2000.jpg",
      "description": "Heavy-duty power station designed for home backup and disaster preparedness."
    }
  ]
  ;

export const powerStationSeed = async () => {

    const allBrand = await Brand.find();

    const newPowerStation = data.map((item) => {
      const brand = allBrand[Math.floor(Math.random() * 25)];
      return {...item, brandId: brand._id};
    });


    await PowerStation.deleteMany({});
    await PowerStation.insertMany(newPowerStation);
    console.log("powerstation added...")
}