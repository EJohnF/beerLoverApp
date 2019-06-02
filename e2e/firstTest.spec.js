import moment from 'moment'

async function readTextValue(testID) {
  try {
    await expect(element(by.id(testID))).toHaveText("__read_element_error_");
  } catch (error) {
    const start = `AX.id='${testID}';`;
    const end = "; AX.frame";
    const errorMessage = error.message.toString();
    const [, restMessage] = errorMessage.split(start);
    const [label] = restMessage.split(end);
    const [, value] = label.split("=");

    return value.slice(1, value.length - 1);
  }
}

const currentMonth = moment().format('MM')

describe('MainList', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('base functionality of  Search Bar - open, type and close', async () => {
    await expect(element(by.text('Search by name'))).toBeVisible();
    await element(by.text('Search by name')).typeText('bu');
    await element(by.label('return')).tap()
    await expect(element(by.id('beerList'))).toBeVisible();
  });

  it('should have brew filter button with proper text change after activation', async () => {
    await expect(element(by.id('brewFilterButton'))).toBeVisible();
    await expect(element(by.text('Set brew filter'))).toBeVisible();
    await element(by.id('brewFilterButton')).tap()
    await element(by.text(device.getPlatform() === 'android' ? 'ok' : 'Confirm')).tap()
    await expect(element(by.text(`brew after: ${moment().format('MM-YYYY')}`))).toBeVisible();
  });

  it('should show close brew filter button after applying brew filter and hide after tap', async () => {
    await element(by.id('brewFilterButton')).tap()
    await element(by.text(device.getPlatform() === 'android' ? 'ok' : 'Confirm')).tap()
    await expect(element(by.id('beerList'))).toBeVisible();
    await expect(element(by.id('closeBrewFilter'))).toBeVisible();
    await element(by.id('closeBrewFilter')).tap()
    await expect(element(by.id('closeBrewFilter'))).toBeNotVisible();
    await expect(element(by.id('beerList'))).toBeVisible();
  });

  it('filter by name beer "Buzz"', async () => {
    await expect(element(by.text('Search by name'))).toBeVisible();
    await element(by.text('Search by name')).typeText('Buzz');
    await element(by.label('return')).tap()
    await expect(element(by.id('item_name_0'))).toHaveText('Buzz');
    await expect(element(by.id('item_brew_0'))).toHaveText('09/2007');
  });

  it(`filter by brew after ${currentMonth}/2015 check at least 20 entries`, async () => {
      await element(by.id('brewFilterButton')).tap()
      await element(by.text('2015')).tap()
      const setBrewDate = moment(`${currentMonth}/2015`, 'MM/YYYY')
      await element(by.text(device.getPlatform() === 'android' ? 'ok' : 'Confirm')).tap()
      let i = 0
      while (i <= 20) {
        try {
          await expect(element(by.id(`item_brew_${i}`))).toBeVisible();
        } catch {
          break
        }
        const brewDate = await readTextValue(`item_brew_${i}`);
        if (moment(brewDate, 'MM/YYYY').isBefore(setBrewDate)){
          throw new Error(`brew filter is not correct. ${brewDate} is not after ${currentMonth}/2015`)
        }
        i += 1
        try { //dont throw error if reach the end
          await element(by.id('beerList')).scroll(70, 'down');
        } catch {
          break
        }
      }
  });

  it('check that its possible to open beer view and all information exist', async () => {
    await element(by.id('item_name_0')).tap();
    await expect(element(by.id('beer_image'))).toBeVisible();
    try { //dont throw error if reach the end. And check that it's scrollable
      // and can be visible even with a lot info in a small screen
      await element(by.id('beerViewList')).scroll(200, 'down');
    } catch {}
    await expect(element(by.id('Name_content'))).toBeVisible();
    await expect(element(by.id('Description_content'))).toBeVisible();
    try { //dont throw error if reach the end
      await element(by.id('beerViewList')).scroll(200, 'down');
    } catch {}
    await expect(element(by.id('Alcohol by volume_content'))).toBeVisible();
    await expect(element(by.id('Volume_content'))).toBeVisible();
    await expect(element(by.id('First Brew_content'))).toBeVisible();
    await expect(element(by.id('food_paiting_list'))).toBeVisible();
    try { //dont throw error if reach the end
      await element(by.id('beerViewList')).scroll(100, 'down');
    } catch {}
  })
});
