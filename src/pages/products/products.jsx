import React from 'react';
import TextInputContainer from '../../layouts/text-input/TextInputContainer';
import {
  CustomButton,
  CustomTabBar,
} from '../../layouts';
import { BsSearch, BsPlusLg } from 'react-icons/bs';
import { Col, Container, Row } from 'reactstrap';
import { tabsIconAndText } from '../../utils/tab-text';
import AddItemModal from '../../components/modal-add/AddItemModal';
import { productColumns } from '../../utils/table-header';
import { mockProductData } from '../../utils/product';

const ProductPage = () => {
  const [modalAddItem, setModalAddItem] = React.useState(false);

  const toggleModalAddItem = () => {
    setModalAddItem(!modalAddItem);
  };

  const handleSearch = () => {
    console.log('search');
  };

  return (
    <div style={{ padding: 20 }}>
      <Container>
        <Row>
          <Col>
            <TextInputContainer
              textLabel={'Tên sản phẩm'}
              placeholder={'Nhập dữ liệu'}
            />
          </Col>
          <Col>
            <TextInputContainer
              textLabel={'Tạo từ ngày'}
              placeholder={'dd//mm/yyyy'}
            />
          </Col>
          <Col>
            <TextInputContainer
              textLabel={'Ngày tạo đến'}
              placeholder={'dd//mm/yyyy'}
            />
          </Col>
        </Row>
      </Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 20,
          gap: 10,
        }}
      >
        <CustomButton
          text={'Tìm kiếm'}
          color={'blue'}
          icon={<BsSearch />}
          onClick={handleSearch}
        />
        <CustomButton
          text={'Thêm mới'}
          color={'green'}
          icon={<BsPlusLg />}
          onClick={toggleModalAddItem}
        />
      </div>
      <div>
        <CustomTabBar
          tabsIconAndText={tabsIconAndText}
          dataSource={mockProductData}
          columns={productColumns}
        />
      </div>
      <AddItemModal isOpen={modalAddItem} toggle={toggleModalAddItem} />
    </div>
  );
};

export default ProductPage;
