'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import imageCompression from 'browser-image-compression';
import Image from 'next/image';
import { api } from '@/apis/instance.api';

const Page = () => {
  const [mainImage, setMainImage] = useState<File | undefined>();
  const [mainImageUrl, setMainImageUrl] = useState('');
  const [detailImage, setDetailImage] = useState<File | undefined>();
  const [detailImageUrl, setDetailImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [rating, setRating] = useState('');
  const [runningTime, setRunningTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startAts, setStartAts] = useState(() => [{ id: 0, startAt: '' }]);
  const [places, setPlaces] = useState(() => [{ id: 0, city: '', place: '' }]);
  const [seatRanks, setSeatRanks] = useState(() => [
    { id: 0, seatRank: '', count: 0, price: '' },
  ]);
  const [floors, setFloors] = useState(() => [{ id: 0, floor: 1 }]);
  const [sectionSelect, setSectionSelect] = useState(
    floors[floors.length - 1].floor,
  );
  const [sections, setSections] = useState(() => [
    {
      id: 0,
      section: 'A',
      maxSeats: 0,
      floor: 1,
    },
  ]);
  const [columnSelect, setColumnSelect] = useState({
    floor: 1,
    section: 'A',
  });
  const [columns, setColumns] = useState(() => [
    {
      id: 0,
      section: 'A',
      floor: 1,
      column: 1,
      count: 10,
      seatRank: '',
      isEmptySeats: '',
    },
  ]);

  // ==================================================================
  const handleAddStartAt = () => {
    setStartAts([
      ...startAts,
      { id: startAts[startAts.length - 1].id + 1, startAt: '' },
    ]);
  };

  const handleInputChangeStartAt = (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const values = [...startAts];
    values[index].startAt = e.target.value;
    setStartAts(values);
  };

  const handleRemoveStartAt = (id: number) => {
    if (startAts.length === 1) {
      alert('최소한 하나의 시간을 설정해야합니다.');
      return;
    }
    setStartAts(startAts.filter((startAt) => startAt.id !== id));
  };
  // ==================================================================
  const handleAddSeatRank = () => {
    setSeatRanks([
      ...seatRanks,
      {
        id: seatRanks[seatRanks.length - 1].id + 1,
        seatRank: '',
        count: 0,
        price: '',
      },
    ]);
  };

  const handleInputChangeSeatRank = (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const values = [...seatRanks];

    if (e.target.name === 'seatRank') {
      values[index].seatRank = e.target.value;
    } else if (e.target.name === 'count') {
      values[index].count = Number(e.target.value) as unknown as number;
    } else {
      const value = e.target.value.replace(/[^0-9]/g, '');
      const removeCommaValue = Number(value.replaceAll(',', ''));
      values[index].price = removeCommaValue.toLocaleString();
    }
    setSeatRanks(values);
  };

  const handleRemoveSeatRank = (id: number) => {
    if (seatRanks.length === 1) {
      alert('최소한 하나의 장소가 있어야합니다.');
      return;
    }
    setSeatRanks(seatRanks.filter((seatRank) => seatRank.id !== id));
  };

  // ==================================================================
  const handleAddPlace = () => {
    setPlaces([
      ...places,
      { id: places[places.length - 1].id + 1, city: '', place: '' },
    ]);
  };

  const handleInputChangePlace = (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const values = [...places];

    if (e.target.name === 'city') {
      values[index].city = e.target.value;
    } else {
      values[index].place = e.target.value;
    }
    setPlaces(values);
  };

  const handleRemovePlace = (id: number) => {
    if (places.length === 1) {
      alert('최소한 하나의 장소가 있어야합니다.');
      return;
    }
    setPlaces(places.filter((place) => place.id !== id));
  };

  // ==================================================================
  const handleAddFloor = () => {
    setFloors([
      ...floors,
      {
        id: floors[floors.length - 1].id + 1,
        floor: (floors[floors.length - 1].floor as number) + 1,
      },
    ]);
  };

  const handleInputChangeFloor = (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const values = [...floors];
    values[index].floor = e.target.value as unknown as number;
    setFloors(values);
  };

  const handleRemoveFloor = (id: number) => {
    if (floors.length === 1) {
      alert('최소한 하나의 층이 있어야합니다.');
      return;
    }
    setFloors(floors.filter((floor) => floor.id !== id));
    setSections([...sections.filter((section) => section.floor === id)]);
  };

  // ==================================================================
  const handleSectionSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSectionSelect(e.target.value as unknown as number);
  };

  // ==================================================================
  const handleAddSection = () => {
    const values = [
      ...sections,
      {
        id: sections.sort((a, b) => a.id - b.id)[sections.length - 1].id + 1,
        section: '',
        maxSeats: 0,
        floor: Number(sectionSelect) as number,
      },
    ].sort((a, b) => a.floor - b.floor);
    setSections(values);
  };

  const handleInputChangeSection = (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const values = [...sections];

    if (e.target.name === 'section') {
      values[index].section = e.target.value as string;
    } else if (e.target.name === 'maxSeats') {
      values[index].maxSeats = Number(e.target.value) as unknown as number;
    }

    setSections(values);
  };

  const handleRemoveSection = (id: number) => {
    if (sections.length === 1) {
      alert('최소한 하나의 구역이 있어야합니다.');
      return;
    }
    setSections(sections.filter((section) => section.id !== id));
  };

  // ==================================================================
  const handleColumnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const [floor, section] = e.target.value.split(':');
    setColumnSelect({
      floor: Number(floor) as unknown as number,
      section: section as string,
    });
  };

  const handleAddColumn = () => {
    let values;

    const columnSort = columns
      .filter(
        (column) =>
          column.floor === columnSelect.floor &&
          column.section === columnSelect.section,
      )
      .sort((a, b) => a.column - b.column);

    if (columnSort.length !== 0) {
      values = [
        ...columns,
        {
          id: columns.sort((a, b) => a.id - b.id)[columns.length - 1].id + 1,
          section: columnSelect.section,
          floor: Number(columnSelect.floor) as number,
          column: (columnSort[columnSort.length - 1].column + 1) as number,
          count: 10 as number,
          isEmptySeats: '',
          seatRank: '',
        },
      ];
      // .sort((a, b) => a.floor - b.floor)
      // .sort((a, b) => a.section.localeCompare(b.section));
    } else {
      values = [
        ...columns,
        {
          id: columns.sort((a, b) => a.id - b.id)[columns.length - 1].id + 1,
          section: columnSelect.section,
          floor: Number(columnSelect.floor) as number,
          column: 1 as number,
          count: 10 as number,
          isEmptySeats: '',
          seatRank: '',
        },
      ];
      // .sort((a, b) => a.floor - b.floor)
      // .sort((a, b) => a.section.localeCompare(b.section));
    }

    setColumns(values);
  };

  const handleInputChangeColumn = (
    index: number,
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    const values = [...columns];

    if (e.target.name === 'column') {
      values[index].column = Number(e.target.value) as unknown as number;
    } else if (e.target.name === 'count') {
      values[index].count = Number(e.target.value) as unknown as number;
    } else if (e.target.name === 'seatRank') {
      values[index].seatRank = e.target.value as string;
    } else if (e.target.name === 'isEmptySeats') {
      values[index].isEmptySeats = e.target.value as string;
    }

    setColumns(values);
  };

  const handleRemoveColumn = (id: number) => {
    if (columns.length === 1) {
      alert('최소한 하나의 열이 있어야합니다.');
      return;
    }
    setColumns(columns.filter((column) => column.id !== id));
  };

  // ==================================================================
  // const handleMainImage = async (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];

  //   const options = {
  //     // maxSizeMB: 2,
  //     // maxWidthOrHeight: 1920,
  //   };

  //   if (file) {
  //     const compressedFile = await imageCompression(file, options);

  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(compressedFile);
  //     fileReader.onload = async (e) => {
  //       const formData = new FormData();
  //       formData.append('mainImage', file);
  //       formData.append('id', '3');
  //       formData.append('userId', 'company');
  //       formData.append('role', 'COMPANY');
  //       const response = await api.post('file/concert/main', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });
  //       console.log('response', response);

  //       const result = e?.target?.result as string;
  //       setMainImageUrl(result);
  //     };
  //   }
  // };
  const handleMainImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      alert('이미지 파일을 다시 확인해주세요.');
      return;
    }

    const options = {
      // maxSizeMB: 2,
      // maxWidthOrHeight: 1920,
    };

    if (file) {
      const compressedFile = await imageCompression(file, options);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(compressedFile);
      fileReader.onload = (e) => {
        const result = e?.target?.result as string;
        setMainImageUrl(result);
        setMainImage(file);
      };
    }
  };

  const handleDetailImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const options = {
      // maxSizeMB: 10,
      // maxWidthOrHeight: 1920,
    };

    if (file) {
      const compressedFile = await imageCompression(file, options);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(compressedFile);
      fileReader.onload = (e) => {
        const result = e?.target?.result as string;
        setDetailImageUrl(result);
        setDetailImage(file);
      };
    }
  };
  // ==================================================================
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log('mainImage', mainImage);
    // console.log('detailImage', detailImage);
    // console.log('title', title);
    // console.log('subtitle', subtitle);
    // console.log('rating', rating);
    // console.log('runningTime', runningTime);
    // console.log('startDate', startDate);
    // console.log('endDate', endDate);
    // console.log('startAts', startAts);
    // console.log('places', places);
    // console.log('seatRanks', seatRanks);
    // console.log('floors', floors);
    // console.log('sections', sections);
    // console.log('columns', columns);
    // return;
    if (mainImage && detailImage) {
      const formData = new FormData();
      formData.append('vendor_main_image', mainImage);
      formData.append('vendor_detail_image', detailImage);
      formData.append('title', title);
      formData.append('subtitle', subtitle);
      formData.append('rating', rating);
      formData.append('runningTime', runningTime);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);
      formData.append('startAts', JSON.stringify(startAts));
      formData.append('places', JSON.stringify(places));
      formData.append('seatRanks', JSON.stringify(seatRanks));
      formData.append('floors', JSON.stringify(floors));
      formData.append('sections', JSON.stringify(sections));
      formData.append('columns', JSON.stringify(columns));

      const response = await api.post('vendor/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('response', response);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2%' }}>
      <div style={{ paddingTop: '100px', paddingLeft: '100px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <label htmlFor="mainImage">대표 이미지</label>
              <input
                type="file"
                id="mainImage"
                accept="image/*"
                onChange={(e) => handleMainImage(e)}
              />
              <label htmlFor="mainImage">
                <div
                  id="mainImageContainer"
                  style={{
                    width: '396.75px',
                    height: '700px',
                    border: '1px solid #999',
                    overflow: 'auto',
                    position: 'relative',
                  }}
                >
                  <Image
                    id="mainImagePreview"
                    src={mainImageUrl}
                    alt="mainImage"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%,-50%)',
                      backfaceVisibility: 'hidden',
                      imageRendering: '-webkit-optimize-contrast',
                      height: 'auto',
                    }}
                    width={0}
                    height={0}
                  />
                </div>
              </label>
            </div>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <label htmlFor="detailImage">상세 이미지</label>
              <input
                type="file"
                id="detailImage"
                onChange={(e) => handleDetailImage(e)}
              />
              <label htmlFor="detailImage">
                <div
                  id="detailImageContainer"
                  style={{
                    width: '396.75px',
                    height: '700px',
                    border: '1px solid #999',
                    overflow: 'auto',
                    position: 'relative',
                  }}
                >
                  <Image
                    id="detailImagePreview"
                    src={detailImageUrl}
                    alt="detailImage"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%,-50%)',
                      backfaceVisibility: 'hidden',
                      imageRendering: '-webkit-optimize-contrast',
                      height: 'auto',
                    }}
                    width={0}
                    height={0}
                  />
                </div>
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label htmlFor="subtitle">부제목</label>
            <input
              type="text"
              id="subtitle"
              onChange={(e) => setSubtitle(e.target.value)}
              value={subtitle}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label htmlFor="rating">관람연령</label>
            <input
              type="text"
              id="rating"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />{' '}
            세 이상
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label htmlFor="runningTime">공연시간</label>
            <input
              type="text"
              id="runningTime"
              onChange={(e) => setRunningTime(e.target.value)}
              value={runningTime}
            />{' '}
            분
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label htmlFor="runningTime">공연기간</label>
            <input
              type="date"
              id="startDate"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
            />
            ~
            <input
              type="date"
              id="endDate"
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
            <label htmlFor="addPlace">공연시작시간</label>
            <button
              type="button"
              id="addPlace"
              onClick={() => handleAddStartAt()}
              style={{ marginTop: 10, marginRight: 10 }}
            >
              시작 시간 추가
            </button>
          </div>
          <div className="startAtsContainer">
            {startAts.map((startAt, index) => (
              <div key={index} style={{ marginBottom: 5 }}>
                <input
                  type="text"
                  placeholder="14:30"
                  name="startAt"
                  value={startAt.startAt}
                  onChange={(e) => handleInputChangeStartAt(index, e)}
                  style={{ marginRight: 10 }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveStartAt(startAt.id)}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>

          {/* 장소 */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
            <label htmlFor="addPlace">공연장소</label>
            <button
              type="button"
              id="addPlace"
              onClick={() => handleAddPlace()}
              style={{ marginTop: 10, marginRight: 10 }}
            >
              장소 추가
            </button>
          </div>
          <div className="placesContainer">
            {places.map((place, index) => (
              <div key={index} style={{ marginBottom: 5 }}>
                <input
                  type="text"
                  placeholder="서울"
                  name="city"
                  value={place.city}
                  onChange={(e) => handleInputChangePlace(index, e)}
                  style={{ marginRight: 10 }}
                />

                <input
                  type="text"
                  placeholder="서울잠실종합운동장"
                  name="place"
                  value={place.place}
                  onChange={(e) => handleInputChangePlace(index, e)}
                  style={{ marginRight: 10 }}
                />

                <button
                  type="button"
                  onClick={() => handleRemovePlace(place.id)}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>

          {/* 좌석 */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
            <label htmlFor="addPlace">좌석</label>
            <button
              type="button"
              id="addPlace"
              onClick={() => handleAddSeatRank()}
              style={{ marginTop: 10, marginRight: 10 }}
            >
              좌석 추가
            </button>
          </div>
          <div className="seatRanksContainer">
            {seatRanks.map((seatRank, index) => (
              <div
                key={index}
                style={{
                  marginBottom: 5,
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '10px',
                }}
              >
                <input
                  type="text"
                  placeholder="VIP"
                  name="seatRank"
                  value={seatRank.seatRank}
                  onChange={(e) => handleInputChangeSeatRank(index, e)}
                  style={{ width: '50px' }}
                />
                석
                <input
                  type="text"
                  placeholder="50"
                  name="count"
                  value={seatRank.count}
                  onChange={(e) => handleInputChangeSeatRank(index, e)}
                  style={{ width: '50px' }}
                />
                개
                <input
                  type="text"
                  placeholder="100,000"
                  name="price"
                  value={seatRank.price}
                  onChange={(e) => handleInputChangeSeatRank(index, e)}
                  style={{ width: '100px' }}
                />
                원
                <button
                  type="button"
                  onClick={() => handleRemoveSeatRank(seatRank.id)}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>

          {/* 층 */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
            <label htmlFor="addFloor">층</label>
            <button
              type="button"
              id="addFloor"
              onClick={() => handleAddFloor()}
              style={{ marginTop: 10, marginRight: 10 }}
            >
              층 추가
            </button>
          </div>
          <div className="FloorsContainer">
            {floors.map((floor, index) => (
              <div key={index} style={{ marginBottom: 5 }}>
                <input
                  type="text"
                  placeholder="1"
                  name="floor"
                  value={floor.floor}
                  onChange={(e) => handleInputChangeFloor(index, e)}
                  style={{ marginRight: 10 }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveFloor(floor.id)}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>

          {/* 구역 */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
            <label>구역</label>
            <select onChange={(e) => handleSectionSelect(e)}>
              {floors.map((floor, i) => (
                <option key={i} value={floor.floor}>
                  {floor.floor}층
                </option>
              ))}
            </select>
            <button
              type="button"
              id="addSection"
              onClick={() => handleAddSection()}
              style={{ marginTop: 10, marginRight: 10 }}
            >
              구역 추가
            </button>
          </div>
          <div className="sectionsContainer">
            {sections
              .sort((a, b) => a.floor - b.floor)
              .map((section, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      marginBottom: 5,
                      display: 'flex',
                      alignItems: 'stretch',
                    }}
                    data-id={section.id}
                  >
                    <span style={{ fontSize: '18px', paddingRight: '10px' }}>
                      {section.floor}층
                    </span>
                    <input
                      type="text"
                      placeholder="A"
                      name="section"
                      value={section.section}
                      onChange={(e) => handleInputChangeSection(index, e)}
                      style={{ marginRight: 10 }}
                    />
                    <span style={{ fontSize: '18px', paddingRight: '10px' }}>
                      구역
                    </span>
                    <input
                      type="text"
                      placeholder="25"
                      name="maxSeats"
                      value={section.maxSeats}
                      onChange={(e) => handleInputChangeSection(index, e)}
                      style={{ marginRight: 10, width: '50px' }}
                    />
                    <span style={{ fontSize: '18px', paddingRight: '10px' }}>
                      임의의 열에 대한 최대 좌석 수
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSection(section.id)}
                    >
                      삭제
                    </button>
                  </div>
                );
              })}
          </div>

          {/* 열 */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
            <label>열</label>
            <select onChange={(e) => handleColumnSelect(e)}>
              {sections.map((section, i) => (
                <option key={i} value={section.floor + ':' + section.section}>
                  {section.floor}층 - {section.section}구역
                </option>
              ))}
            </select>
            <button
              type="button"
              id="addColumn"
              onClick={() => handleAddColumn()}
              style={{ marginTop: 10, marginRight: 10 }}
            >
              열 추가
            </button>
          </div>
          <div className="columnsContainer">
            {columns
              // .sort((a, b) => a.floor - b.floor)
              // .sort((a, b) => a.section.localeCompare(b.section))
              .map((column, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      marginBottom: 5,
                      display: 'flex',
                      alignItems: 'stretch',
                      gap: '10px',
                    }}
                    data-id={column.id}
                  >
                    <span style={{ fontSize: '18px' }}>{column.floor}층</span>
                    <span style={{ fontSize: '18px' }}>
                      {column.section}구역
                    </span>
                    <input
                      type="text"
                      placeholder="1"
                      name="column"
                      value={column.column}
                      onChange={(e) => handleInputChangeColumn(index, e)}
                      style={{ width: '50px' }}
                    />
                    <span>열</span>
                    <input
                      type="text"
                      placeholder="10"
                      name="count"
                      value={column.count}
                      onChange={(e) => handleInputChangeColumn(index, e)}
                      style={{ width: '50px' }}
                    />
                    <span>좌석</span>
                    <select
                      name="seatRank"
                      onChange={(e) => handleInputChangeColumn(index, e)}
                    >
                      <option value={''} defaultValue={''}>
                        {'선택'}
                      </option>
                      {seatRanks.map((seatRank, i) => {
                        return (
                          <option key={i} value={seatRank.seatRank}>
                            {seatRank.seatRank}
                          </option>
                        );
                      })}
                    </select>
                    <span>석</span>
                    <select
                      name="isEmptySeats"
                      onChange={(e) => handleInputChangeColumn(index, e)}
                    >
                      <option value={''}>선택</option>
                      <option value={'none'}>없음</option>
                      <option value={'left'}>왼쪽</option>
                      <option value={'right'}>오른쪽</option>
                    </select>
                    <span>자리 없음</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveColumn(column.id)}
                    >
                      삭제
                    </button>
                  </div>
                );
              })}
          </div>
        </div>

        <button
          type="submit"
          style={{ marginTop: '20px', float: 'right', fontSize: '20px' }}
        >
          저장
        </button>
      </div>
    </form>
  );
};

export default Page;
