import React from 'react';
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import App, {articles, paginate, totalArticles, articlesPerPage, setCurrentPage} from './App'
import Articles from './components/articles'
import Pagination from './components/pagination'

describe('App', () => {
  test('app renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  });

  it('renders one instance of articles', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(Articles).length).toEqual(1)
  });

  it('renders one instance of pagination', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find(Pagination).length).toEqual(1)
  });
});

describe('Articles', () => {
  test('articles render correctly', () => {
    const articles = [{
      "source": {
      "id": null,
      "name": "Merkur.de"
      },
      "author": null,
      "title": "Rewe-Kundin macht Foto von Bio-Produkten - Kurioses Detail sehen viele spät | Verbraucher - fehmarn24.de",
      "description": "Eine Kundin machte in einer Rewe-Filiale eine ungewöhnliche Entdeckung. Als sie ein Foto davon auf Facebook postete, sorgte dieses für Verwirrung unter den Nutzern.",
      "url": "https://www.merkur.de/verbraucher/rewe-fund-foto-detail-kundin-ekel-heuschrecke-facebook-kommentare-erkennen-zr-13395011.html",
      "urlToImage": "https://www.fehmarn24.de/bilder/2019/12/31/13395011/2145860025-dieses-foto-hat-ein-user-in-einer-rewe-filile-gemacht-haetten-sie-tierische-detail-gleich-gesehen-EnoLPiTZGef.jpg",
      "publishedAt": "2020-01-05T21:58:53Z",
      "content": "Eine Kundin machte in einer Rewe-Filiale eine ungewöhnliche Entdeckung. Als sie ein Foto davon auf Facebook postete, sorgte dieses für Verwirrung unter den Nutzern.\r\n<ul><li>Eine Kundin machte in einer Rewe-Filiale einen Fund, der einigen wohl sauer aufstoßen… [+2814 chars]"
    }]

    const wrapper = mount(<Articles articles={ articles }/>)
    expect(wrapper.find('a').text()).toEqual("Rewe-Kundin macht Foto von Bio-Produkten - Kurioses Detail sehen viele spät | Verbraucher - fehmarn24.de")
  });
});

describe('Pagination', () => {
  test('pagination renders the correct number of pages', () => {
    const wrapper = mount(<div><Pagination totalArticles={20} articlesPerPage={2} paginate={(pageNumber) => setCurrentPage(pageNumber)} /></div>)
    expect(wrapper.find('.page-link').length).toEqual(10)
  });
});