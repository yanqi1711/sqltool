package top.sqltool.model.dto;

import java.io.Serializable;
import lombok.Data;

/**
 * 用户登录请求体
 *
 * @author https://sonna.cn
 */
@Data
public class UserLoginRequest implements Serializable {

    private static final long serialVersionUID = 3191241716373120793L;

    private String userAccount;

    private String userPassword;
}
