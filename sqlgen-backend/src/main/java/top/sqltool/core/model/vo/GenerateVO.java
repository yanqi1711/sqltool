package top.sqltool.core.model.vo;

import top.sqltool.core.schema.TableSchema;
import java.io.Serializable;
import java.util.List;
import java.util.Map;
import lombok.Data;

/**
 * 生成的返回值
 *
 * @author https://sonna.cn
 */
@Data
public class GenerateVO implements Serializable {

    private TableSchema tableSchema;

    private String createSql;

    private List<Map<String, Object>> dataList;

    private String insertSql;

    private String dataJson;

    private String javaEntityCode;

    private String javaObjectCode;

    private String typescriptTypeCode;

    private static final long serialVersionUID = 7122637163626243606L;
}
