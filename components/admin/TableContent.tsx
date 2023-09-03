import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link,
} from "@chakra-ui/react";
import adminApis from "@/api/admin";
import formatDate from "@/utils/formatDate";

type MemberData = {
  memberId: number;
  imageUrl: string;
  realName: string;
  joinedAt: string;
};
type TableProps = {
  data: MemberData[];
  type?: string;
};
const TableContent: React.FC<TableProps> = ({ data, type = "학생" }) => {
  const handleCertificate = async (userId: number) => {
    const response = await adminApis.acceptMember(userId);
    console.log(response);
  };
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          승인 거절을 원하는 경우 기재된 유저 메일로 거절 사유를 보내야함
          <br />
          승인하기 클릭 시 바로 승인이 완료됩니다. 주의해서 눌러주세요.
        </TableCaption>
        <Thead>
          <Tr>
            <Th>유저 아이디</Th>
            <Th>{type === "학생" ? "이름" : "기업명"}</Th>
            <Th>첨부된 파일</Th>
            <Th>가입 일자</Th>
            <Th>승인 여부</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(el => {
            return (
              <Tr key={el.memberId}>
                <Td>{el.memberId}</Td>
                <Td>{el.realName}</Td>
                <Td>
                  <Link href={el.imageUrl} isExternal>
                    클릭해서 이미지 보기
                  </Link>
                </Td>
                <Td>{formatDate(el.joinedAt)}</Td>
                <Td
                  onClick={() => handleCertificate(el.memberId)}
                  color={"red"}
                >
                  승인하기
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
