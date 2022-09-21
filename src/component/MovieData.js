import {useState} from 'react'
import App from '../App'

function MovieData(){

  let {movieData,setMovieData}= useState(
[
    {
      id: 'mv001',
    itemName : '공조2 : 인터네셔날',
    contentP : '감독: 이석훈 \n 출연 : 현빈,유해진,윤아',
    contentS : "공조 이즈 백! 이번엔 삼각 공조다! 남한으로 숨어든 글로벌 범죄 조직을 잡기 위해 새로운 공조 수사에 투입된 북한 형사 ‘림철령’(현빈). 수사 중의 실수로 사이버수사대로 전출됐던 남한 형사 ‘강진태’(유해진)는 광수대 복귀를 위해 모두가 기피하는 ‘철령’의 파트너를 자청한다.",
    imgPath : 'https://movie-phinf.pstatic.net/20220826_188/1661489945659Su2RI_JPEG/movie_image.jpg?type=m203_290_2',
    videoPath : <iframe width="789" height="444" src="https://www.youtube.com/embed/fzUKUfHeIYA" title="3배 더 강력해진 하나의 팀! [공조2: 인터내셔날] 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 'mv002',
    itemName : '헌트',
    contentP : '감독: 이정재 출연: 이정재,정우성,전혜진',
    contentS : "[조직 내 숨어든 스파이를 색출하라!‘사냥꾼’이 될 것인가, ‘사냥감’이 될 것인가!] 망명을 신청한 북한 고위 관리를 통해 정보를 입수한 안기부 해외팀 ‘박평호’(이정재)와 국내팀 ‘김정도’(정우성)는  조직 내 숨어든 스파이 ‘동림’ 색출 작전을 시작한다.  스파이를 통해 일급 기밀사항들이 유출되어 위기를 맞게 되자  날 선 대립과 경쟁 속, 해외팀과 국내팀은 상대를 용의선상에 올려두고  조사에 박차를 가한다.",
    imgPath : ' https://movie-phinf.pstatic.net/20220805_227/1659685387586PIORG_JPEG/movie_image.jpg?type=m203_290_2',
    videoPath : <iframe width="789" height="444" src="https://www.youtube.com/embed/CSOb8gia_mg" title="[헌트] 공식 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 'mv003',
    itemName : '한산: 용의 출현',
    contentP : '감독: 김한민 출연: 박해일,변요한,안성기',
    contentS : "나라의 운명을 바꿀 압도적 승리의 전투가 시작된다! 1592년 4월, 조선은 임진왜란 발발 후 단 15일 만에 왜군에 한양을 빼앗기며 절체절명의 위기에 놓인다.  조선을 단숨에 점령한 왜군은 명나라로 향하는 야망을 꿈꾸며 대규모 병역을 부산포로 집결시킨다. 1592년 여름, 음력 7월 8일 한산도 앞바다, 압도적인 승리가 필요한 조선의 운명을 건 지상 최고의 해전이 펼쳐진다.",
    imgPath : 'https://movie-phinf.pstatic.net/20220727_209/1658912961873lVd2W_JPEG/movie_image.jpg?type=m203_290_2',
    videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/GduEtmvwcI0" title="[한산: 용의 출현] 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 'mv004',
    itemName : '탑건:매버릭',
    contentP : '감독: 조셉 코신스키 이정재 출연: 톰 크루즈, 마일즈 텔러, 제니퍼 코넬리',
    contentS : "한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다!",
    imgPath : 'https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg?type=m203_290_2',
    videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/Mrj9XACVJ8U" title="[탑건: 매버릭] 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 'mv005',
    itemName : '블랙폰',
    contentP : '감독: 스콧 데릭슨 출연: 에단 호크, 메이슨 테임즈,매들린 맥그로',
    contentS : "사라진 아이들, 고장 난 전화기, 죽은 친구들과의 통화. 전화가 울리면 반드시 받을 것",
    imgPath : 'https://movie-phinf.pstatic.net/20220907_295/1662518947849s9ym1_JPEG/movie_image.jpg?type=m203_290_2',
    videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/OSFfTzwuXKk" title="[블랙폰] 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 'mv006',
    itemName : '놉',
    contentP : '감독: 조던 필 출연: 다니엘 칼루야, 케케 파머, 스티븐 연',
    contentS : "그것은 우리 위에 있다. 거대하고, 주목받길 원하고, 미쳤다. 나쁜 기적이라는 것도 있을까?",
    imgPath : 'https://movie-phinf.pstatic.net/20220729_1/1659070685587fXfeh_JPEG/movie_image.jpg?type=w480_2',
    videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/JllzxDFhhnI" title="스포일러 주의 [놉] 파이널 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 'mv007',
    itemName : '알라딘',
    contentP : '감독: 가이 리치 출연: 메나 마수드, 윌 스미스, 나오미 스콧',
    contentS : "머나먼 사막 속 신비의 아그라바 왕국의 시대. 좀도둑 ‘알라딘’은 마법사 ‘자파’의 의뢰로 마법 램프를 찾아 나섰다가 주인에게 세 가지 소원을 들어주는 지니를 만나게 되고, 자스민 공주의 마음을 얻으려다 생각도 못했던 모험에 휘말리게 되는데…",
    imgPath : ' https://movie-phinf.pstatic.net/20190524_104/1558663170174Q2mmw_JPEG/movie_image.jpg?type=m203_290_2',
    videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/KrM3vS5sy2w" title="[알라딘] 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 'mv008',
    itemName : '외계+인 1부',
    contentP : '감독: 최동훈 출연: 류준열, 김우빈, 김태리',
    contentS : " 2022년 인간 속에 수감된 외계인 죄수를 쫓는 이들 1391년 고려 말 소문 속의 신검을 차지하려는 도사들 시간의 문이 열리고 모든 것이 바뀌기 시작했다!",
    imgPath : 'https://movie-phinf.pstatic.net/20220708_75/16572722362230AyHS_JPEG/movie_image.jpg?type=m203_290_2',
    videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/l9288UVTHkA" title="[외계+인] 1부 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
        id: 'mv009',
      itemName : '극장판 엄마 까투리: 도시로 간 까투리 가족',
      contentP : '감독: 정길훈 출연: 김서영,이윤희,김은아',
      contentS : "대한민국 대표 애니메이션 ‘엄마 까투리’의 첫 번째 극장판 새로운 보금자리를 찾아 나선 까투리 가족의 위대한 여정이 시작된다!",
      imgPath : 'https://movie-phinf.pstatic.net/20220913_118/1663056633713IoWYX_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="788" height="443" src="https://www.youtube.com/embed/Ha6Ec203B2I" title="[엄마까투리 극장판] 도시로 간 까투리 가족 메인 예고편🐥 | 까투리 극장판 | 어린이 영화 | 9월 8일 대개봉" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv010',
      itemName : '어쩌다 공주, 닭냥이 왕자를 부탁해!',
      contentP : '감독: 줄리앙 프루네',
      contentS : "어쩌다 공주가 된 필, 닭냥이가 된 왕자님을 구해야 한다!",
      imgPath : 'https://movie-phinf.pstatic.net/20220729_298/1659063263419MeRd6_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="788" height="443" src="https://www.youtube.com/embed/CZoy7nsBFhc" title="애니 [어쩌다 공주, 닭냥이 왕자를 부탁해!] 메인 예고편(우리말): 신예은: 2022.09" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv011',
      itemName : '범죄도시2',
      contentP : '감독: 최동훈 출연: 류준열, 김우빈, 김태리',
      contentS : "[조직 내 숨어든 스파이를 색출하라!‘사냥꾼’이 될 것인가, ‘사냥감’이 될 것인가!] 망명을 신청한 북한 고위 관리를 통해 정보를 입수한 안기부 해외팀 ‘박평호’(이정재)와 국내팀 ‘김정도’(정우성)는  조직 내 숨어든 스파이 ‘동림’ 색출 작전을 시작한다.  스파이를 통해 일급 기밀사항들이 유출되어 위기를 맞게 되자  날 선 대립과 경쟁 속, 해외팀과 국내팀은 상대를 용의선상에 올려두고  조사에 박차를 가한다.",
      imgPath : 'https://movie-phinf.pstatic.net/20220708_75/16572722362230AyHS_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/l9288UVTHkA" title="[외계+인] 1부 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv012',
      itemName : '외계+인 1부',
      contentP : '감독: 최동훈 출연: 류준열, 김우빈, 김태리',
      contentS : "[조직 내 숨어든 스파이를 색출하라!‘사냥꾼’이 될 것인가, ‘사냥감’이 될 것인가!] 망명을 신청한 북한 고위 관리를 통해 정보를 입수한 안기부 해외팀 ‘박평호’(이정재)와 국내팀 ‘김정도’(정우성)는  조직 내 숨어든 스파이 ‘동림’ 색출 작전을 시작한다.  스파이를 통해 일급 기밀사항들이 유출되어 위기를 맞게 되자  날 선 대립과 경쟁 속, 해외팀과 국내팀은 상대를 용의선상에 올려두고  조사에 박차를 가한다.",
      imgPath : 'https://movie-phinf.pstatic.net/20220708_75/16572722362230AyHS_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/l9288UVTHkA" title="[외계+인] 1부 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv013',
      itemName : '외계+인 1부',
      contentP : '감독: 최동훈 출연: 류준열, 김우빈, 김태리',
      contentS : "[조직 내 숨어든 스파이를 색출하라!‘사냥꾼’이 될 것인가, ‘사냥감’이 될 것인가!] 망명을 신청한 북한 고위 관리를 통해 정보를 입수한 안기부 해외팀 ‘박평호’(이정재)와 국내팀 ‘김정도’(정우성)는  조직 내 숨어든 스파이 ‘동림’ 색출 작전을 시작한다.  스파이를 통해 일급 기밀사항들이 유출되어 위기를 맞게 되자  날 선 대립과 경쟁 속, 해외팀과 국내팀은 상대를 용의선상에 올려두고  조사에 박차를 가한다.",
      imgPath : 'https://movie-phinf.pstatic.net/20220708_75/16572722362230AyHS_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/l9288UVTHkA" title="[외계+인] 1부 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv014',
      itemName : '외계+인 1부',
      contentP : '감독: 최동훈 출연: 류준열, 김우빈, 김태리',
      contentS : "[조직 내 숨어든 스파이를 색출하라!‘사냥꾼’이 될 것인가, ‘사냥감’이 될 것인가!] 망명을 신청한 북한 고위 관리를 통해 정보를 입수한 안기부 해외팀 ‘박평호’(이정재)와 국내팀 ‘김정도’(정우성)는  조직 내 숨어든 스파이 ‘동림’ 색출 작전을 시작한다.  스파이를 통해 일급 기밀사항들이 유출되어 위기를 맞게 되자  날 선 대립과 경쟁 속, 해외팀과 국내팀은 상대를 용의선상에 올려두고  조사에 박차를 가한다.",
      imgPath : 'https://movie-phinf.pstatic.net/20220708_75/16572722362230AyHS_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/l9288UVTHkA" title="[외계+인] 1부 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv015',
      itemName : '외계+인 1부',
      contentP : '감독: 최동훈 출연: 류준열, 김우빈, 김태리',
      contentS : "[조직 내 숨어든 스파이를 색출하라!‘사냥꾼’이 될 것인가, ‘사냥감’이 될 것인가!] 망명을 신청한 북한 고위 관리를 통해 정보를 입수한 안기부 해외팀 ‘박평호’(이정재)와 국내팀 ‘김정도’(정우성)는  조직 내 숨어든 스파이 ‘동림’ 색출 작전을 시작한다.  스파이를 통해 일급 기밀사항들이 유출되어 위기를 맞게 되자  날 선 대립과 경쟁 속, 해외팀과 국내팀은 상대를 용의선상에 올려두고  조사에 박차를 가한다.",
      imgPath : 'https://movie-phinf.pstatic.net/20220708_75/16572722362230AyHS_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/l9288UVTHkA" title="[외계+인] 1부 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      },
      {
        id: 'mv016',
      itemName : '외계+인 1부',
      contentP : '감독: 최동훈 출연: 류준열, 김우빈, 김태리',
      contentS : "[조직 내 숨어든 스파이를 색출하라!‘사냥꾼’이 될 것인가, ‘사냥감’이 될 것인가!] 망명을 신청한 북한 고위 관리를 통해 정보를 입수한 안기부 해외팀 ‘박평호’(이정재)와 국내팀 ‘김정도’(정우성)는  조직 내 숨어든 스파이 ‘동림’ 색출 작전을 시작한다.  스파이를 통해 일급 기밀사항들이 유출되어 위기를 맞게 되자  날 선 대립과 경쟁 속, 해외팀과 국내팀은 상대를 용의선상에 올려두고  조사에 박차를 가한다.",
      imgPath : 'https://movie-phinf.pstatic.net/20220708_75/16572722362230AyHS_JPEG/movie_image.jpg?type=m203_290_2',
      videoPath :  <iframe width="789" height="444" src="https://www.youtube.com/embed/l9288UVTHkA" title="[외계+인] 1부 메인 예고편" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      }

  ]
  )

  return (
    <div>
      {movieData.map((data,i) => (
        <App movieData={movieData} key={movieData.id}/>
      ))}
    </div>
  )
}

export default MovieData